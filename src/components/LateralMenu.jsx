import { useNavigate } from "react-router-dom";

const LateralMenu = () => {
    const navigate = useNavigate();

    const goToCatalog=()=>{
        navigate("/Home");
    }

    const goToCart=()=>{
        navigate("/ShoppingCart");
    }

    const goToStamps = () => {
        navigate("/Stamps");
    }

    const goToSales = () => {
        navigate("/Sales");
    }

    const goToStatistics=()=>{
        navigate("/Statistics")
    }

    const goToUsers = () => {
        navigate("/users");
    }

    const goToSettings = () => {
        navigate("/Settings");
    }

    const handleLogOut = () => {
        alert("Sesión cerrada");

        sessionStorage.setItem("role", "");
        sessionStorage.setItem("username", "");
        navigate("/", { replace: true});
    }

    const renderButtons = () => {
        if(sessionStorage.getItem("role") == "cliente") {
            return(
                <>
                    <button id="button-signIn" value="products" className={`flex items-center w-full px-2 2xl:px-4 py-2 2xl:py-3 mb-12 border-white border-x-2 border-y-2 
                    rounded-lg bg-white shadow-lg text-black text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                    onClick={goToCatalog}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 
                        002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 
                        2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 
                        6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 
                        1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/></svg>
                        <span className="ml-2"> Ver camisetas </span> 
                    </button>

                    <button id="button-shoppingCart" value="shoppingCart" className={`flex items-center w-full px-2 2xl:px-4 py-2 2xl:py-3 border-white border-x-2 border-y-2 
                    rounded-lg bg-white shadow-lg text-black text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`} 
                    onClick={goToCart} > 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 
                        3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 
                        011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/></svg>     
                        <span className="ml-2"> Ver carrito </span> 
                    </button>
                </>
            );
        } else if(sessionStorage.getItem("role") == "artista") {
            return(
                <>
                    <button id="button-qualificationsRV" value="qualificationsRV" className={`flex items-center w-full px-2 2xl:px-4 py-2 2xl:py-3 mb-12 border-white border-x-2 border-y-2 
                    rounded-lg bg-white shadow-lg text-black text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                    onClick={goToStamps}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 
                        00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 
                        0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>
                        <span className="ml-2"> Administrar estampas </span> 
                    </button>

                    <button id="button-payroll" value="payroll" className={`flex items-center w-full px-2 2xl:px-4 py-2 2xl:py-3 mb-12 border-white border-x-2 border-y-2 rounded-lg
                    bg-white shadow-lg text-black text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                    onClick={goToSales}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 
                        0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 
                        .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 
                        10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/></svg>
                        <span className="ml-2"> Ver ventas </span> 
                    </button>

                    <button id="button-statistics" value="statistics" className={`flex items-center w-full px-2 2xl:px-4 py-2 2xl:py-3 border-white border-x-2 border-y-2 
                    rounded-lg bg-white shadow-lg text-black text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                    onClick={goToStatistics}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 
                        0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>
                        <span className="ml-2"> Ver estadísticas </span> 
                    </button>
                </>
            );
        } else if(sessionStorage.getItem("role") == "admin") {
            return(
                <>
                    <button id="button-signUpRV" value="signUpRV" className={`flex items-center w-full px-2 2xl:px-4 py-2 2xl:py-3 mb-12 border-white border-x-2 border-y-2 rounded-lg
                    bg-white shadow-lg text-black text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                    onClick={goToUsers}> 
                        <svg className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 
                        20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 
                        2 0 11-4 0 2 2 0 014 0z"/></svg>
                        <span className="ml-2"> Administrar usuarios</span> 
                    </button>

                    <button id="button-infoRV" value="infoRV" className={`flex items-center w-full px-2 2xl:px-4 py-2 2xl:py-3 border-white border-x-2 border-y-2 rounded-lg 
                    bg-white shadow-lg text-black text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                    onClick={goToSettings}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 
                        1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 
                        01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 
                        01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 
                        0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 
                        01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 
                        1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        <span className="ml-2"> Configuración </span> 
                    </button>
                </>
            );
        }
    }

    return (
        <article className="fixed w-1/6 top-0 left-0 h-full bg-gradient-to-b from-lightBlue to-darkBlue">
            <h1 id="appTitle" className="mt-10 mb-4 text-white font-extrabold font-title text-3xl text-center">EstampasExpress</h1>

            <h1 className="text-center text-white text-base 2xl:text-lg font-medium font-subtitle"> {
            sessionStorage.getItem("username") + " - " + sessionStorage.getItem("role")} </h1>

            <section className="flex flex-col justify-between items-center h-5/6">
                <div className="flex flex-col justify-start items-center h-1/2 mt-14">
                    { renderButtons() }
                </div>
                
                <div className="w-10/12 2xl:w-3/5 px-2 2xl:px-4 py-2 2xl:py-3">
                    <button id="button-logOut" value="logOut" className={`flex items-center px-2 2xl:px-4 py-2 2xl:py-3 border-white border-x-2 border-y-2 rounded-lg 
                    bg-white shadow-lg text-black text-sm font-semibold font-title hover:cursor-pointer hover:bg-transparent hover:text-white transition-colors`}
                    onClick={handleLogOut}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 
                        2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/></svg>  
                        <span className="ml-2"> Cerrar sesión </span> 
                    </button>
                </div>
            </section>
        </article>
    )
}

export default LateralMenu