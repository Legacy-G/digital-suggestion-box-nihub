

const Notification = ({ value, status }) => {
    let textStyles = status === "good" ? "text-green-500" 
        : status === "bad" ? "text-red-500" 
        : !status && "text-slate-500"

    const purgeNotif = () => {
        const notif = document.querySelector("#notification")
        notif.style.display = "none";
        // console.log("mert")
    }


    return (
        <section id="notification"
                className="fixed top-0 left-0 z-[30] bg-transparent h-[100vh] w-[100vw]
                            flex items-center justify-center
        ">
            <div className={` ${textStyles} text-[23px] font-[600]  mx-auto p-[1rem]
                            bg-white rounded-lg w-[300px] h-[200px] text-center
                            flex items-center justify-center 
                            relative
            `}>
                {value}
                <button className="bg-gradient-to-b from-blue-500 to-cyan-600 
                                    rounded-lg py-2 px-4 text-white text-[16px]
                                    absolute bottom-[16px] right-[16px]
                                    active:scale-90
                "   onClick={purgeNotif}
                >
                    Okay
                </button>
            </div>
        </section>
    )
}


export default Notification;