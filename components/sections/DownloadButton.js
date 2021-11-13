import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DownloadButton = () => {

    const downloadFile = () => {
        window.location.href = "https:/sayeedinfo.com/uploads/sayeed-.cv.pdf"
    }

    return (
        <>
            <div className="mt-5 mx-3 lg:mx-0 text-gray-500 bg-white px-5 py-2 shadow-md rounded-full font-sm my-3 hover:shadow-xl active:scale-90 transition duration-150 hover:bg-red-500 hover:text-white w-8/12 lg:w-3/12 hover:cursor-pointer justify-center">
                <a href="https:/sayeedinfo.com/uploads/sayeed-.cv.pdf" target="_blank" download>
                    <FontAwesomeIcon className="mx-1 w-5 font-light float-left" icon={faDownload}/> Download Resume
                </a>
            </div>
        </>
    )
}

export default DownloadButton
