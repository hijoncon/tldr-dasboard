import { ElementType } from "react"

export interface CardInput {
  title: string,
  value: any,
  icon: ElementType
}

export const Card = (data: CardInput) => {
  return (
    <div className="h-30 w-[135px] md:h-40 md:w-64 flex flex-col justify-center bg-foreground rounded-lg m-1 md:m-2 p-2 pl-5">
      <data.icon sx={{ color: 'var(--highlight)' }} />
      <div className="flex h-full w-full items-end text-text text-2xl md:text-4xl">
        {data.value}
      </div>
      <div className="flex text-textSecondary text-md md:text-lg w-full ">
        {data.title}
      </div>
    </div>
  )
}