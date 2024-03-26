function Stats() {
  return (
    <section className="flex flex-row justify-evenly p-4 md:p-8 bg-purple-500 overflow-hidden">
        <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-sm">Number of Users</p>
            <p className="bg-gradient-to-r from-gray-600 to-purple-900 text-transparent bg-clip-text font-bold text-2xl">1000+</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-sm">Languages</p>
            <p className="bg-gradient-to-r from-gray-600 to-purple-900 text-transparent bg-clip-text font-bold text-2xl">10+</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-sm">Latency</p>
            <p className="bg-gradient-to-r from-gray-600 to-purple-900 text-transparent bg-clip-text font-bold text-2xl">Fast</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <p className="font-semibold text-sm">Satisfaction</p>
            <p className="bg-gradient-to-r from-gray-600 to-purple-900 text-transparent bg-clip-text font-bold text-2xl">92%</p>
        </div> 

    </section>
  )
}

export default Stats