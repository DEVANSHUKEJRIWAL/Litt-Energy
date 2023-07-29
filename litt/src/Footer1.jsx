import React from 'react'

const Footer1 = () => {
    return (
        <div>
            <footer class="flex flex-none items-center bg-white dark:bg-gray-800">
                <div class="border-t border-gray-200">
                    <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
                        <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                <label for="footer-field" class="leading-7 text-sm text-gray-600">Email Us</label>
                                <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Join</button>
                        </div>
                        
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer1
