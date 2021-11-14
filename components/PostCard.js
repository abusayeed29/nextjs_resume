import Link from "next/link";

const PostCard = ({title, slug, body, tags}) => {
    return (
        <>
        <div className="max-w-3xl mx-4 mb-10 rounded-lg shadow-sm">
            <div className="bg-gray-50 p-8">
                <div className="text-xs text-gray-600 uppercase font-semibold">23 Sep 2020</div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link href={`/blog/${slug}`}>
                        <a className="text-gray-900 dark:text-gray-100">{title}</a>
                    </Link>
                </h2>
                <p className="leading-normal text-gray-700">{body}</p>
                <div className="flex space-x-2 mt-5">
                    {tags && tags.map((tag, i) => {
                        return (
                            <div className= "text-xs px-3 bg-gray-200 text-gray-800 rounded-full" key={i}>{tag.tag.name}</div>
                        )

                    })}
                </div>
                <Link href={`/blog/${slug}`}>
                    <a className="flex items-center mt-6 uppercase text-sm text-black font-semibold">Read article <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg></a>
                </Link>
            </div>
        </div>
            
        </>
    )
}

export default PostCard
