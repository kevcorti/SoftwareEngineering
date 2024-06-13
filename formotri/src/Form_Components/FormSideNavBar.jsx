
export default function FormSideNavBar(props){
    
    return(
        <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[30%] xl:w-[25%] 2xl:w-[20%] overflow-y-scroll">
    <div className="text-justify">
        <div class="-mx-6 px-6 py-4 border-b">
            <span className="text-gray-700 text-xl px-4 py-3 space-x-4" > Secciones </span>
        </div>
        <ul class="space-y-2 tracking-wide mt-8">
            <li>
                <a href="#" aria-label="dashboard" class="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                    <span class="-mr-1 font-medium">ORIGEN DEL RESULTADO DE PROYECTO </span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">DIFUSIÓN DEL RESULTADO DE PROYECTO </span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                    <span class="group-hover:text-gray-700">RECURSOS DE FONDOS</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                    <span class="group-hover:text-gray-700">RELACIÓN DE AUTORES/INVENTORES Y DECLARACIÓN DE PARTICIPACIONES</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">DESCRIPCIÓN DEL RESULTADO DEL PROYECTO</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">PROPIEDAD INTELECTUAL</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">MATERIALES</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">SOFTWARE/CÓDIGO FUENTE</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">INFORMACIÓN DE MERCADO</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">INFORMACIÓN PARA POSIBLE EXPLOTACIÓN DE RESULTADOS DE PROYECTOS </span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">DESARROLLO FUTURO EN EL PROYECTO</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">SOLICITUD DE PROTECCIÓN DE PROPIEDAD INTELECTUAL</span>
                </a>
            </li>
            <li>
                <a href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
                   <span class="group-hover:text-gray-700">DECLARACIÓN EXPRESA</span>
                </a>
            </li>
        </ul>
    </div>

    <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
            <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  
            <path d="M20 12h-13l3 -3m0 6l-3 -3" /></svg>
            <span class="group-hover:text-gray-700">Regresar</span>
        </button>
    </div>
</aside>
    );
}