import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import IconError from "/images/icon-error.svg";
import { Fragment } from "react/jsx-runtime";

type FormInput = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
};

export default function App() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FormInput>();
    const onSubmit: SubmitHandler<FormInput> = () => {
        toast("Submit!", {
            className: "bg-c_Blue font-poppings text-white text-center",
        });
        reset();
    };
    return (
        <main className="w-full bg-cover min-h-screen lg:bg-[url(/images/bg-intro-desktop.png)] bg-[url(/images/bg-intro-mobile.png)] flex lg:flex-row flex-col lg:justify-center items-center gap-8 p-4 lg:pb-0 pb-16">
            <div className="lg:w-[25rem] flex flex-col gap-6 lg:items-start items-center lg:py-0 pt-24 lg:pb-0 pb-12">
                <h1 className="text-white font-poppings font-bold lg:text-[2.3rem] text-2xl lg:leading-[2.5rem] lg:w-fit w-[20rem] lg:text-left text-center">
                    Learn to code by watching others
                </h1>
                <span className="text-white font-poppings lg:text-xs text-sm leading-5 lg:w-full w-[76vw] lg:text-left text-center">
                    See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great, but understanding how
                    developers think is invaluable.{" "}
                </span>
            </div>
            <div className="lg:w-[28rem] flex flex-col gap-5 w-full">
                <div className="bg-black bg-opacity-20 rounded-lg">
                    <div className="rounded-lg bg-c_Blue border-b-3 border-gray-500 text-white font-poppings text-center py-[14px] text-xs drop-shadow-2xl -translate-y-[6px] w-full flex justify-center">
                        <p className="lg:w-full text-center lg:px-0 text-wrap w-[10rem] leading-5">
                            <span className="font-bold">
                                Try it free 7 days{" "}
                            </span>
                            then $20/mo. thereafter
                        </p>
                    </div>
                </div>
                <div className="bg-black bg-opacity-20 rounded-lg">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="rounded-lg bg-white lg:p-8 p-5 flex flex-col gap-4 -translate-y-[6px]"
                    >
                        <div className="relative w-full flex flex-col items-end">
                            <input
                                type="text"
                                {...register("first_name", {
                                    required: "First Name cannot be empty",
                                })}
                                placeholder="First Name"
                                className={`lg:px-7 px-5 outline-none border-[1px] py-[14px] rounded-md font-poppings text-sm font-medium outline-[1px] focus:border-c_Blue w-full ${
                                    "first_name" in errors
                                        ? "border-c_Red"
                                        : "border-c_Grayish_Blue"
                                }`}
                            />
                            {"first_name" in errors && (
                                <Fragment>
                                    <img
                                        src={IconError}
                                        alt="first name error"
                                        className="absolute right-6 top-4 size-5"
                                    />
                                    <span className="font-poppings text-[8px] text-c_Red italic right-0 pt-1">
                                        {errors.first_name?.message}
                                    </span>
                                </Fragment>
                            )}
                        </div>
                        <div className="relative w-full flex flex-col items-end">
                            <input
                                type="text"
                                {...register("last_name", {
                                    required: "Last Name cannot be empty",
                                })}
                                placeholder="Last Name"
                                className={`lg:px-7 px-5 outline-none border-[1px] py-[14px] rounded-md font-poppings text-sm font-medium outline-[1px] focus:border-c_Blue w-full ${
                                    "last_name" in errors
                                        ? "border-c_Red"
                                        : "border-c_Grayish_Blue"
                                }`}
                            />
                            {"last_name" in errors && (
                                <Fragment>
                                    <img
                                        src={IconError}
                                        alt="last name error"
                                        className="absolute right-6 top-4 size-5"
                                    />
                                    <span className="font-poppings text-[8px] text-c_Red italic right-0 pt-1">
                                        {errors.last_name?.message}
                                    </span>
                                </Fragment>
                            )}
                        </div>
                        <div className="relative w-full flex flex-col items-end">
                            <input
                                type="text"
                                {...register("email", {
                                    required: "Email cannot be empty",
                                    pattern: {
                                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                        message:
                                            "Looks like this is not an email",
                                    },
                                })}
                                placeholder="Email Address"
                                className={`lg:px-7 px-5 outline-none border-[1px] py-[14px] rounded-md font-poppings text-sm font-medium outline-[1px] focus:border-c_Blue w-full ${
                                    "email" in errors
                                        ? "border-c_Red"
                                        : "border-c_Grayish_Blue"
                                }`}
                            />
                            {"email" in errors && (
                                <Fragment>
                                    <img
                                        src={IconError}
                                        alt="email error"
                                        className="absolute right-6 top-4 size-5"
                                    />
                                    <span className="font-poppings text-[8px] text-c_Red italic right-0 pt-1">
                                        {errors.email?.message}
                                    </span>
                                </Fragment>
                            )}
                        </div>
                        <div className="relative w-full flex flex-col items-end">
                            <input
                                type="text"
                                {...register("password", {
                                    required: "Password cannot be empty",
                                })}
                                placeholder="Password"
                                className={`lg:px-7 px-5 outline-none border-[1px] py-[14px] rounded-md font-poppings text-sm font-medium outline-[1px] focus:border-c_Blue w-full ${
                                    "password" in errors
                                        ? "border-c_Red"
                                        : "border-c_Grayish_Blue"
                                }`}
                            />
                            {"password" in errors && (
                                <Fragment>
                                    <img
                                        src={IconError}
                                        alt="password error"
                                        className="absolute right-6 top-4 size-5"
                                    />
                                    <span className="font-poppings text-[8px] text-c_Red italic right-0 pt-1">
                                        {errors.password?.message}
                                    </span>
                                </Fragment>
                            )}
                        </div>
                        <button
                            className="rounded-md hover:bg-opacity-70 transition border-b-4 bg-c_Green border-green-600 font-poppings text-white font-medium py-3 text-xs"
                            type="submit"
                        >
                            CLAIM YOUR FREE TRIAL
                        </button>
                        <p className="text-[8px] font-poppings text-c_Grayish_Blue text-center -translate-y-1">
                            By clicking the button, you are agreeing to our{" "}
                            <span className="font-bold text-c_Red cursor-pointer">
                                Terms and Services
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
}
