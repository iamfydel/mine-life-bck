import React from "react";
import { useForm } from "react-hook-form";
import fetch from "node-fetch";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

// const handleSubmit = async (e, req, res) => {
//     e.preventDefault();
//     let isValidForm = handleValidation();
// };

export default function ContactForm() {
    const [CompanyName, setCompanyName] = useState("")
    const [Name, setName] = useState("")
    const [PostalCode, setPostalCode] = useState("")
    const [Address, setAddress] = useState("")
    const [Mail, setMail] = useState("")
    const [PhoneNo, setPhoneNo] = useState("")
    const [QuestionsRquest, setQuestionsRquest] = useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            Type: "Contact-us",
            CompanyName: "",
            Name: "",
            PostalCode: "",           
            Address: "",
            Mail: "",
            PhoneNo: "",
            QuestionsRquest: ""
        }
    });

    const onSubmit = async (defaultValues) => {
        // var value = JSON.stringify(defaultValues);
        // if (value.Name != "") {
        //     var Apiurl = "https://insight-global-wp.000webhostapp.com/wp-content/themes/insightglobal/sendinblue.php";
        //     const urlresponse = await fetch(Apiurl, {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(defaultValues),
        //         mode: "no-cors",
        //     });
        //     openModal();
        // }
        // else {
        //     console.log("Failed");
        // }
        //res.status(200).end()
    };

    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
        setCompanyName('')
    }
    return (
        <div className="bg-primary-light px-5 md:px-7 lg:px-10 xl:px-10 2xl:px-10 py-3 md:py-7 lg:py-7 xl:py-7 2xl:py-7">
            <form action="#" className="w-full inline-block" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Mail sent successful
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Your mail has been successfully. We’ve sent
                                                you an email with all of the details of your request.
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Got it, thanks!
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
                <div className="form-sec w-full block">
                    <div className="mt-3 lg:mt-7 xl:mt-7 2xl:mt-7 w-full inline-block md:flex lg:flex xl:flex 2xl:flex items-center">
                        <div className="input-heading w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <label className="text-custom-black font-medium text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">会社名　Company Name</label>
                        </div>
                        <div className="input-box w-full mt-2 lg:mt-0 xl:mt-0 2xl:mt-0 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <input {...register("CompanyName", { required: false })} onChange={(e) => { setCompanyName(e.target.value) }}
                                aria-invalid={errors.CompanyName ? "true" : "false"}
                                className="rounded input-field w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text" />
                        </div>
                    </div>

                    <div className="mt-3 lg:mt-7 xl:mt-7 2xl:mt-7 w-full inline-block md:flex lg:flex xl:flex 2xl:flex items-center">
                        <div className="input-heading w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <label className="text-custom-black font-medium text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">お名前 Name <i className="text-red-600">*</i></label>
                        </div>
                        <div className="input-box w-full mt-2 lg:mt-0 xl:mt-0 2xl:mt-0 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <input {...register("Name", { required: true })} onChange={(e) => { setName(e.target.value) }}
                                aria-invalid={errors.Name ? "true" : "false"}
                                className="rounded input-field w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text" />
                        <div className="error-msg">
                            {errors.Name?.type === 'required' && <p className="text-red-500" role="alert">お名前  Name is required</p>}
                        </div>
                        </div>                        
                    </div>

                    <div className="mt-3 lg:mt-7 xl:mt-7 2xl:mt-7 w-full inline-block md:flex lg:flex xl:flex 2xl:flex items-center">
                        <div className="input-heading w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <label className="text-custom-black font-medium text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">郵便番号　Postal Code</label>
                        </div>
                        <div className="input-box w-full mt-2 lg:mt-0 xl:mt-0 2xl:mt-0 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <input {...register("PostalCode", { required: false })} onChange={(e) => { setPostalCode(e.target.value) }}
                                aria-invalid={errors.PostalCode ? "true" : "false"}
                                className="rounded input-field w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text" />
                        </div>
                    </div>

                    <div className="mt-3 lg:mt-7 xl:mt-7 2xl:mt-7 w-full inline-block md:flex lg:flex xl:flex 2xl:flex items-center">
                        <div className="input-heading w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <label className="text-custom-black font-medium text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">住所　Address</label>
                        </div>
                        <div className="input-box w-full mt-2 lg:mt-0 xl:mt-0 2xl:mt-0 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <input {...register("Address", { required: false })} onChange={(e) => { setAddress(e.target.value) }}
                                aria-invalid={errors.Address ? "true" : "false"}
                                className="rounded input-field w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text" />
                        </div>
                    </div>

                    <div className="mt-3 lg:mt-7 xl:mt-7 2xl:mt-7 w-full inline-block md:flex lg:flex xl:flex 2xl:flex items-center">
                        <div className="input-heading w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <label className="text-custom-black font-medium text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">メールアドレス Mail<i className="text-red-600">*</i></label>
                        </div>
                        <div className="input-box w-full mt-2 lg:mt-0 xl:mt-0 2xl:mt-0 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <input {...register("Mail", { required: true })} onChange={(e) => { setMail(e.target.value) }}
                                aria-invalid={errors.Name ? "true" : "false"}
                                className="rounded input-field w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="email" />
                        <div className="error-msg">
                            {errors.Mail?.type === 'required' && <p className="text-red-500" role="alert">メールアドレス Email is required</p>}
                        </div>
                        </div>                        
                    </div>

                    <div className="mt-3 lg:mt-7 xl:mt-7 2xl:mt-7 w-full inline-block md:flex lg:flex xl:flex 2xl:flex items-center">
                        <div className="input-heading w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <label className="text-custom-black font-medium text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">電話番号 Phone</label>
                        </div>
                        <div className="input-box w-full mt-2 lg:mt-0 xl:mt-0 2xl:mt-0 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <input {...register("PhoneNo", { required: false })} onChange={(e) => { setPhoneNo(e.target.value) }}
                                aria-invalid={errors.PhoneNo ? "true" : "false"}
                                className="rounded input-field w-full pl-3 border-2 text-sm border-gray-300 h-10 focus:outline-none" type="text" />
                        </div>
                    </div>

                    <div className="mt-3 lg:mt-7 xl:mt-7 2xl:mt-7 w-full inline-block md:flex lg:flex xl:flex 2xl:flex items-center">
                        <div className="input-heading w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <label className="text-custom-black font-medium text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
                                <span className="w-full block">ご質問についてお聞かせください</span>
                                Please tell us about your question
                            </label>
                        </div>
                        <div className="input-box w-full mt-2 lg:mt-0 xl:mt-0 2xl:mt-0 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 inline-block float-left">
                            <textarea rows={4} {...register("QuestionsRquest")} className="rounded w-full pl-3 border-2 text-sm border-gray-300 focus:outline-none"></textarea>
                        </div>
                    </div>

                    <div className="mt-10 block submit-btn text-center">
                        <button type="submit" className="text-white px-7 font-medium font-sm btn-gradient-hover btn-submit btn-gradient btn-medium">
                            送信
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}