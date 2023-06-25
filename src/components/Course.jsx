import styles from '../Styles'

function Course( props ) {
  return (
    <div className=' p-4 rounded-lg border border-gray-200 hover:bg-sky-50 hover:border-sky-500 transition ease-out cursor-pointer'>
        <div className=' h-56 w-full bg-gray-200 rounded-lg mb-4 bg-cover bg-center' style={{backgroundImage: `url(${props.photo})`}}></div>
        <h5 className=' font-semibold text-lg md:text-xl mb-2'>{props.name}</h5>
        <span className=' font-semibold text-base lg:text-lg'>${props.fee}<span className={styles.regularText}>/m</span></span>
        <p className={`${styles.regularText} mt-2 h-16 overflow-y-clip`}>{props.description}</p>
    </div>
  )
}

export default Course
