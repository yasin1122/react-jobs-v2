import jobs from '../jobs.json'

console.log(jobs)

const JobListings = () => {
  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          Browse Jobs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {jobs.map(job => (
            <div className='bg-white'>
              <div className='p-4'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JobListings
