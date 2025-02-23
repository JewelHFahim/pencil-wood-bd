import { Dispatch, FC, SetStateAction } from "react"

interface PaymentMethodAccrodianProps{
  selectedMethod: string,
  setSelectedMethod: Dispatch<SetStateAction<string>>
}

const PaymentMethodAccrodian: FC<PaymentMethodAccrodianProps> = ({selectedMethod, setSelectedMethod}) => {


  return (
    <div>
         {/* COD */}
         <div
              onClick={() => setSelectedMethod("COD")}
              className={`${ selectedMethod === "COD" ? "border-primary" : "border-b-0" } border border-gray-400 rounded-t-md px-4 h-[50px] flex items-center gap-5 cursor-pointer`}>
              <div className={`${ selectedMethod === "COD" ? "border-primary border-[6px]" : "border" } w-5 h-5 rounded-full`}></div>
              <p className="text-sm">Cash on Delivery (COD)</p>
            </div>

            {/* BKash */}
            <div
              onClick={() => setSelectedMethod("bKash")}
              className={`${ selectedMethod === "bKash" ? "border-primary" : "border-t-0 rounded-b-md" } border border-gray-400 rounded-b-m px-4 h-[50px] flex items-center gap-5 cursor-pointer`}>
              <div className={`${ selectedMethod === "bKash" ? "border-primary border-[6px]" : "border" } w-5 h-5 rounded-full`}></div>
              <p className="text-sm">bKash</p>
            </div>
    </div>
  )
}

export default PaymentMethodAccrodian