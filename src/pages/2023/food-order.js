import Buttons from "@components23/UI/Buttons";
import { Dialog, Disclosure, Transition, Listbox, Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Image from "next/image";
import { env } from "next.config";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";


const foodOrder = () =>{
    const [selectedVoucher, setSelectedVoucher] = useState(0)
    const [cart, setCart] = useState([]);
    const [lock, setLock] = useState(true)
    const [password, setPassword] = useState('');
    const [foodData,setFoodData] = useState(null);
    const [drinkData, setDrinkData] = useState(null)

  const [modalSuccessOrder, setModalSuccessOrder] = useState(false);
    const [voucher75Usage,setVoucher75Usage] = useState(0)
    const [voucher40Usage,setVoucher40Usage] = useState(0)
    const [paymentMethod,setPaymentMethod] = useState("free")
    const [quantity,setQuantity] = useState(0)

    function closeModal() {
        setModalSuccessOrder(false);
      }
    
      function openModal() {
        setModalSuccessOrder(true);
      }
    

    // const storedPassword =  process.env.NEXT_PUBLIC_AFTERPARTY_CODE_1;
    const nextPublicAfterpartyPins = process.env.NEXT_PUBLIC_AFTERPARTY_PINS_1.split(',');

    const handleminus = (e, id) =>{
        e.preventDefault()
        
        var res = false;
        var resPrice = false;
        const idKey = id;

        for (let i = 0; i < cart.length; i++) {
            if ((cart[i].id === idKey) === true) {
                if(cart[i].quantity >= 2){
                    res = cart[i].quantity - 1;
                    cart[i].quantity = res;

                    resPrice = cart[i].price * res;
                    cart[i].totalItem = resPrice;
                }
            }
        }

        return setCart([...cart]);
    }

    const handlePaymentMethod = (e, data) =>{
        e.preventDefault()

        if(data){
            setPaymentMethod(data);
        }
    }

    

    const handlePlus = (e, id) =>{
        e.preventDefault()
        
        var res = false;
        var resPrice = false;
        const idKey = id;

        for (let i = 0; i < cart.length; i++) {
            if ((cart[i].id === idKey) === true) {
                res = cart[i].quantity + 1;
                cart[i].quantity = res;

                resPrice = cart[i].price * res;
                cart[i].totalItem = resPrice;
            }
        }

        return setCart([...cart]);
    }

    const handleAddUpdate = (id) =>{
        
        var res = false;
        var resPrice = false;
        const idKey = id;

        for (let i = 0; i < cart.length; i++) {
            if ((cart[i].id === idKey) === true) {
                res = cart[i].quantity + 1;
                cart[i].quantity = res;

                resPrice = cart[i].price * res;
                cart[i].totalItem = resPrice;
            }
        }

        return setCart([...cart]);
    }

    const handle75UsageMin = (e) =>{
        e.preventDefault()
        
        if(voucher75Usage >= 1) {
            return setVoucher75Usage(voucher75Usage - 1)
        }
    }

    const handle75Usage = (e) =>{
        e.preventDefault()
        
        if(voucher75Usage === 0 || voucher75Usage >= 1) {
            return setVoucher75Usage(voucher75Usage + 1)
        }
    }

    const handle40UsageMin = (e) =>{
        e.preventDefault()
        
        if(voucher40Usage >= 1) {
            return setVoucher40Usage(voucher40Usage - 1)
        }
    }

    const handle40Usage = (e) =>{
        e.preventDefault()
        
        if(voucher40Usage === 0 || voucher40Usage >= 1) {
            return setVoucher40Usage(voucher40Usage + 1)
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Assuming userInput contains the user's entered PIN
        const userInput = password.trim();

        if (nextPublicAfterpartyPins.includes(userInput)) {
            setLock(false);
        } else {
            alert('Password did not match.');
            setPassword("");
        }
    };

    
    const addToCart = (item) => {
        var newData = false;

        if(cart.length === 0 || newData === true){
            const totalItem = item.attributes.price * 1;
            const init = {
                "id": item.id,
                "menu": item.attributes.Menu,
                "price": item.attributes.price,
                "quantity": 1,
                "totalItem": totalItem
            }
            return setCart([...cart, init]);
        } else {
            var res = false;

            for (let i = 0; i < cart.length; i++) {
                if ((cart[i].id === item.id) === true) {
                    res = true;
                }
            }

            if(res === true){
                handleAddUpdate(item.id)
            } else {
                const totalItem = item.attributes.price * 1;
            const init = {
                "id": item.id,
                "menu": item.attributes.Menu,
                "price": item.attributes.price,
                "quantity": 1,
                "totalItem": totalItem
            }
            return setCart([...cart, init]);
            }
            
        }
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const calculateSubtotal = () => {
        const count = cart.reduce((total, item) => total + parseInt(item.totalItem), 0)-selectedVoucher;
        if(count>0){
            return count
        } else {
            return 0
        }
    };

    const calculateDiskonTotal = () => {
        const diskonTotal = 75000 * voucher75Usage + 40000 * voucher40Usage;

        return diskonTotal;
    };

    const calculateTotalPrice = () => {
       var totalPrice = calculateSubtotal() - calculateDiskonTotal();

       if(totalPrice <= 0){
           return totalPrice = 0;
       } else {
            return totalPrice;
       }
    };

    useEffect(()=>{
        const fetchMenu = async () => {
            try {
              const response = await fetch(`${process.env.NEXT_PUBLIC_API}/menu-after-party-jagads?pagination[pageSize]=100`)
              const json = await response.json();
              const food = json.data.filter(item => item.attributes.type === "food") 
              const beverage = json.data.filter(item => item.attributes.type === "beverage")
              setFoodData(food);
              setDrinkData(beverage)
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
            // INI UNTUK POST HASI
        
          fetchMenu()
    },[])

    const postFoodOrder = async (e) => {
        e.preventDefault();

         if(cart.length >= 1 && (calculateTotalPrice() === 0 || paymentMethod !== "")){
            const token = process.env.NEXT_PUBLIC_AFTERPARTY_TOKEN
        const reqConfigs = {    
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Origin: "*",
            Authorization: `Bearer ${token}`,
            Host: "hub.coinvestasi.com",
          },
          referrerPolicy: "no-referrer",
          cache: "no-store",
          body: JSON.stringify({
            data: {
              subtotal: calculateSubtotal(),
              discountTotal: calculateDiskonTotal(),
              total: calculateTotalPrice(),
              voucher75Usage: voucher75Usage,
              voucher40Usage: voucher40Usage,
              orderDetail: {
                data: [cart],
              },
              method: paymentMethod
            },
          }),
        };

        const bseURL = `${process.env.NEXT_PUBLIC_API}`;

        await fetch(bseURL + `/order-after-party-jagads`, reqConfigs)
          .then((res) => {
            setCart([]);
            setVoucher75Usage(0);
            setVoucher40Usage(0);
            setPaymentMethod("free");
          })
          .catch(() => {
              console.log("error")
          });
        }

        setModalSuccessOrder(true);
    }
    
    return(
        <>
        <Head>
        <title>ASIA’S IMMERSIVE WEB3 FESTIVAL</title>
        <meta name="title" content="ASIA’S IMMERSIVE WEB3 FESTIVAL" />
        <meta
          name="description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        </Head>
        <div className={`w-full h-screen overflow bg-primary z-20 absolute sticky ${lock? "":"hidden"}`}>
            <div className="flex flex-col justify-center items-center h-screen gap-y-4">
                <h1 className="text-white text-3xl">COINFEST ASIA AFTER PARTY</h1>
                <form onSubmit={handleSubmit} className="w-1/4">
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    class="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your password"
                    />
                </form>
            </div>
            

        </div>
        <div className={`flex gap-x-10 ${lock? "hidden":""} `}>
            <main className="w-2/3 mt-12 ml-10 overflow-y-hidden">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="font-bold text-3xl">COINFEST ASIA <br/> OFFICIAL AFTER PARTY</h1>
                    <div className="p-4 bg-[#DEEAFF] rounded-xl">
                        <span className="text-sm text-[#919CAF] mb-2">BY</span>
                        <img 
                        className="mt-2"
                        src="assets/food-order/jagad.svg"
                        alt="Logo Jagad"
                        />
                    </div>
                </div>
                <div className="flex justify-between gap-x-2">
                    <Tab.Group >
                        <div className="flex flex-col w-full">
                            <Tab.List className={"w-full flex gap-x-2"}>
                                
                                <Tab className={({ selected }) => `w-1/2 grow  h-[50px] rounded-lg border font-semibold
                                ${selected ? 'bg-primary text-white' : 'text-[#A7A8B5]  border-[#E7E8EE]'}`}>
                                Food
                                </Tab>
                                <Tab className={({ selected }) => `w-1/2 grow  h-[50px] rounded-lg border font-semibold
                                ${selected ? 'bg-primary text-white ' : 'text-[#A7A8B5]  border-[#E7E8EE]'}`}>
                                Beverages
                                </Tab>
                            </Tab.List>

                        
                        <Tab.Panels className={"mt-8"}>
                            <Tab.Panel>
                                <div className="w-full supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4">
                                {foodData && foodData.map((data, index)=>{
                                    return(
                                    <button className={`group/item group/edit col-span-3 p-6 hover:bg-primary rounded-lg border border-[#DEE5F0]`} key={index} onClick={() => addToCart(data)}>
                                        <div className=" flex flex-col text-left ">
                                            <span className="text-xl text-[#3E3737] group-hover/edit:text-white ">{data.attributes.Menu}</span>
                                            <span className="font-medium text-xl text-[#909090] group-hover/edit:text-white/40 ">{`Rp ${Intl.NumberFormat('id-ID').format(data.attributes.price)}`}</span>
                                        </div>
                                    </button> )
                                })}
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="w-full supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4">
                                {drinkData && drinkData.map((data, index)=>{
                                    return(
                                    <button className={`group/item group/edit col-span-3 p-6 hover:bg-primary rounded-lg border border-[#DEE5F0]`} key={index} onClick={() => addToCart(data)}>
                                        <div className=" flex flex-col text-left ">
                                            <span className="text-xl text-[#3E3737] group-hover/edit:text-white ">{data.attributes.Menu}</span>
                                            <span className="font-medium text-xl text-[#909090] group-hover/edit:text-white/40 ">{`Rp ${Intl.NumberFormat('id-ID').format(data.attributes.price)}`}</span>
                                        </div>
                                    </button> )
                                })}
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                        </div>
                        
                    </Tab.Group>

                    
                                    

                </div>

            </main>
            <aside className="w-1/3 bg-[#F2F5FA] h-screen sticky top-0 flex flex-col justify-between overflow-y-scroll">
                <div className="mt-12 mx-10 mb-8">
                    <div className="flex gap-x-2 items-center">
                        <img
                        className="w-8 h-8"
                        src="assets/food-order/cart.svg" 
                        alt="cart"/>
                        <span>Cart</span>
                    </div>

                    {/* Cart List */}
                    <div className="mt-6">
                        <div className="flex flex-col gap-y-2">
                            {/* Card */}
                            {cart.map((data,index)=>{
                                return(
                                <div className="w-full bg-white p-3 flex items-center justify-between rounded-lg" key={index}>
                                    <div className="flex-col gap-y-4">
                                    
                                    <div className="flex gap-x-2 items-center">
                                    <div className=" flex flex-col ">
                                        <span className="text-[#909090] ">{data.menu}</span>
                                        <span className="font-medium text-xl text-[#3E3737]">{`Rp ${Intl.NumberFormat('id-ID').format(data.totalItem)}`}</span>
                                    </div>  
                                    </div>
                                    <div className="w-full bg-white px-2 py-3.5 rounded-lg border flex justify-between items-center">
                                    <button onClick={(e) => handleminus(e, data.id)} className="w-5 h-5 text-center text-3xl align-middle">
                                        <MinusIcon className="h-5 w-5"/>
                                    </button>
                                    <span>{data.quantity}</span>
                                    <button onClick={(e) => handlePlus(e, data.id)} className="w-5 h-5 text-center text-3xl align-middle" >
                                        <PlusIcon className="w-5 h-5"/>
                                    </button>
                                    </div>
                                    </div>
                                    <button onClick={() => removeFromCart(index)}>
                                    <img
                                        className="w-6 h-6"
                                        src="assets/food-order/close-circle.svg"
                                        alt="close button" />
                                    </button>
                                </div>
                                )
                            })}
                        </div>

                    </div>

                    <div>

                    </div>

                </div>
                <div className="sticky bottom-0 w-full  border-t border-[#D1DAE9] relative bg-[#F2F5FA]">
                    <div className="p-7 flex flex-col gap-y-4">
                        <span className="font-medium text-xl">Voucher Usage</span>
                        <div className=" supports-grid:grid grid-cols-3 gap-x-4">
                            <div className="text-left col-span-1">
                                <span>75k</span>
                                <div className="w-full bg-white px-2 py-3.5 rounded-lg flex justify-between items-center">
                                    <button className="w-5 h-5 text-center text-3xl align-middle" onClick={(e)=> handle75UsageMin(e)}>
                                        <MinusIcon className="h-5 w-5"/>
                                    </button>
                                    <span>{voucher75Usage}</span>
                                    <button className="w-5 h-5 text-center text-3xl align-middle" onClick={(e) => handle75Usage(e)}>
                                        <PlusIcon className="w-5 h-5"/>
                                    </button>
                                </div>
                            </div>
                            <div className="text-left col-span-1">
                                <span>40k</span>
                                <div className="w-full bg-white px-2 py-3.5 rounded-lg flex justify-between items-center">
                                    <button className="w-5 h-5 text-center text-3xl align-middle" onClick={(e)=> handle40UsageMin(e)}>
                                        <MinusIcon className="h-5 w-5"/>
                                    </button>
                                    <span>{voucher40Usage}</span>
                                    <button className="w-5 h-5 text-center text-3xl align-middle" onClick={(e) => handle40Usage(e)}>
                                        <PlusIcon className="w-5 h-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="p-7 flex flex-col gap-y-4">
                        <span className="font-medium text-xl">Payment Method</span>
                        <div className=" supports-grid:grid grid-cols-4 gap-x-4">
                            <div className="text-left col-span-1">
                                <button onClick={(e) => handlePaymentMethod(e, "QRIS")} className={`w-full flex-col bg-white px-2 py-3.5 rounded-lg flex justify-between items-center border border-solid ${paymentMethod === "QRIS" ? "border-primary" : "border-white"} hover:border-primary`}>
                                        QRIS
                                </button>
                            </div>
                            <div className="text-left col-span-1">
                                <button onClick={(e) => handlePaymentMethod(e, "J-Wallet")} className={`w-full flex-col bg-white px-2 py-3.5 rounded-lg flex justify-between items-center border border-solid ${paymentMethod === "J-Wallet" ? "border-primary" : "border-white"} hover:border-primary`}>
                                        J-Wallet
                                </button>
                            </div>
                            <div className="text-left col-span-1">
                                <button onClick={(e) => handlePaymentMethod(e, "EDC BCA")} className={`w-full flex-col bg-white px-2 py-3.5 rounded-lg flex justify-between items-center border border-solid ${paymentMethod === "EDC BCA" ? "border-primary" : "border-white"} hover:border-primary`}>
                                        EDC BCA
                                </button>
                            </div>
                            <div className="text-left col-span-1">
                                <button onClick={(e) => handlePaymentMethod(e, "EDC BNI")} className={`w-full flex-col bg-white px-2 py-3.5 rounded-lg flex justify-between items-center border border-solid ${paymentMethod === "EDC BNI" ? "border-primary" : "border-white"} hover:border-primary`}>
                                        EDC BRI
                                </button>
                            </div>
                           
                        </div>

                    </div>
                    <div className="flex flex-col gap-y-4 w-full border-t p-7">
                        <div className="flex justify-between">
                            <span className="text-[#9098A6]">SubTotal</span>
                            <span className="text-xl">{`Rp ${Intl.NumberFormat('id-ID').format(calculateSubtotal())}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#9098A6]">Discount Total</span>
                            <span className="text-xl">{`Rp ${Intl.NumberFormat('id-ID').format(calculateDiskonTotal())}`}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#9098A6]">Total</span>
                            <span className="text-xl">{`Rp ${Intl.NumberFormat('id-ID').format(calculateTotalPrice())}`}</span>
                        </div>
                        
                        
                        {/* <Listbox value={selectedVoucher} onChange={setSelectedVoucher}>
                        <Listbox.Button className={"w-full h-11 rounded-lg bg-white flex justify-between items-center px-2"}>{`${selectedVoucher>0? "Rp " + selectedVoucher + " Voucher" : "Selected Voucher" }`}<ChevronDownIcon className="w-5 h-5"/></Listbox.Button>
                        <Listbox.Options className={"w-[85%] bg-white top-0 absolute -top-12"}>
                            <Listbox.Option
                                className={"py-2 hover:bg-primary hover:text-white hover:cursor-pointer"}
                                value={0}
                            >
                                {"Select Voucher"}
                            </Listbox.Option>
                            <Listbox.Option
                                className={"py-2 border-y border-[#D1DAE9] hover:bg-primary hover:text-white hover:cursor-pointer"}
                                value={30000}
                            >
                                {"Rp 30.000 Voucher"}
                            </Listbox.Option>
                            <Listbox.Option
                                className={"py-2 hover:bg-primary hover:text-white hover:cursor-pointer"}
                                value={50000}
                            >
                                {"Rp 50.000 Voucher"}
                            </Listbox.Option>
                        </Listbox.Options>
                        </Listbox> */}
                        {/* <select name="voucher" id="voucher" className="w-full h-11 rounded-lg">
                            <option value="none" className="h-12">Select Voucher</option>
                            <option value="50k" className="p-4">Voucher 50K</option>
                            <option value="30k" className="p-4">Voucher 30K</option>
                         </select> */}
                           <form onSubmit={(e) => postFoodOrder(e)}>
                           <button
                                type="submit"
                                name="submitFoodOrder"
                                className={`w-full h-14 ${cart.length >= 1 && (calculateTotalPrice() === 0 || paymentMethod !== "") ? "bg-primary pointer-events-auto" : "bg-gray-400 pointer-events-none"} text-xl font-semibold text-white rounded-lg`}
                            >
                                Order
                            </button>




                           </form>
                    </div>
                </div>
                
            </aside>
        </div>

        <Transition
        appear
        show={modalSuccessOrder}
      >
        <Dialog as="div" className="relative z-sm" onClose={closeModal}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black-900 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col items-center justify-between w-full h-[324px] min-w-[395px] max-w-[430px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl py-4.5 px-4 transition-all">
                  <div
                    className={`flex flex-col w-full`}
                  >
                    <div className="mt-[51px]">
                    <span className="flex flex-col items-center justify-center">
                        <Image
                          className="mx-auto h-15 w-15"
                          src="/assets/images/agenda/state/success-question.png"
                          alt={`Coinfest Asia 2023 (Same Question)`}
                          width={127}
                          height={127}
                          quality="87"
                        />
                    </span>
                        <h3 className="font-bevietnam-pro text-xl text-[#626775] text-center mt-4">
                        the purchase is complete, 
                        <br></br>thank you for your order 
                        </h3>
                      </div>
                  </div>
                  <div className="mt-4 w-full">
                    <button
                      type="button"
                      className="block bg-transparent border-2 border-solid border-primary rounded-[10px] text-sm font-medium text-primary px-4 py-4.5 w-full"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </>
    )
}

export default foodOrder;

foodOrder.getLayout = function PageLayout(page) {
    return <>{page}</>;
};