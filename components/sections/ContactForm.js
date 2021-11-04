import { useForm } from 'react-hook-form';

function ContactForm() {


    const {register, handleSubmit, formState: { errors }, reset} = useForm();
    
    
    const onSubmitForm = (data) => {
        console.log(data);
    };
    


    return (
        <div className="flex flex-col lg:flex-row space-x-3 overflow-scroll scrollbar-hide p-6 justify-between">
            <div className="w-2/5">
                Contact Informations:
                <div>
                    <a href="tel:01632 960192" class="flex items-center my-2"> 
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        +880 1922644262 
                    </a>
                    <a href="mailto:2321 Wildwood Street, OH, 44503" class="flex items-center my-2">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        abusayeed29@gmail.com
                    </a>
                    <div class="flex items-center my-2">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        MON-SAT, 9-5 | SUN, 10-4
                    </div>
                    <a href="https://goo.gl/maps/vpgZzbcv6wVwu9sH9" target="_blank" class="flex items-center my-2">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        273/A, Road: 05, Mohammadia Housing <br/>Mohammadpur, Dhaka-1212, Bangladesh
                    </a>
                </div>
            </div>
            <div className="lg:w-3/5">
                <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Name
                            </label>
                            <input 
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${errors.name && "border-red-500"}`} id="grid-first-name" 
                                type="text"
                                placeholder="Full Name"
                                {...register('name', { required: 'Name is required.' })}/>
                                {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Phone
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" 
                            type="text" 
                            {...register('phone', { required: 'Phone is required.' })}
                            placeholder="01922644262" />
                            {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                E-mail
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email"
                            {...register('email', { required: {value:true, message:"You must enter email"}, pattern: {
                                value: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i',
                                message: "invalid email address"
                              }, minLength:{value:8, message:"This is not long enough to be an email"}, maxLength:{value:120, message:"This is too long"} })}
                            type="email" />
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                            {...register('message', {  minLength:{value:8, message:"This is not long enough to be an email"},maxLength:{value:1000, message:"This is too long"} })}
                            id="message"></textarea>
                            {errors.message && <p className="text-red-500 text-xs italic">{errors.message.message}</p>}
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Send
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
