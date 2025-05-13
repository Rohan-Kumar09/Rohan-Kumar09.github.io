'use client'

export default () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">About Me Page</h1>
        <p className="mt-4 text-lg">Comming soon...</p>
        <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded">
            <a href="/" onClick={() => window.close()}>Go Back</a>
        </button>
        </div>
    )
}