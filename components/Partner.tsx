import Image from "next/image"
import cardStyles from '../styles/Partner.module.css'

const Partner = ({key, name, img}: {key:number, name: string, img: any}) => {
  return (
    <div className={cardStyles.partnerCardNew}>
        <div>
            {/* <Image src={`https:${img.fields.file.url}`} alt="Company Logo" width={img.fields.file.details.image.width} height={img.fields.file.details.image.width} /> */}
            <img className={cardStyles.logo} src={`https:${img.fields.file.url}`} alt="" />
        </div>
        {/* <h5>
            {name}
        </h5> */}
    </div>
  )
}

export default Partner