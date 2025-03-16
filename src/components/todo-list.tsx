import { useState } from 'react'
import Block from './block'
import { dataType } from '@/types/data'
import { DATA } from '@/config/todo'

export default function TodoList() {
  const [current, setCurrent] = useState<dataType[]>(DATA)
  const [fruit, setFruit] = useState<dataType[]>([])
  const [vegetable, setVegetable] = useState<dataType[]>([])

  const handleSelect = (item: dataType) => {
    const itemType = item.type.toLowerCase()
    const isItemSelected = current.some((e) => e.name === item.name)

    if (isItemSelected) {
      // Move item from current to fruit/vegetable
      setCurrent((prevCurrent) =>
        prevCurrent.filter((i) => i.name !== item.name)
      )
      if (itemType === 'vegetable') {
        setVegetable((prevVegetables) => [...prevVegetables, item])
      } else if (itemType === 'fruit') {
        setFruit((prevFruits) => [...prevFruits, item])
      }
    } else {
      // Move item from fruit/vegetable back to current
      setCurrent((prevCurrent) => [...prevCurrent, item])
      if (itemType === 'vegetable') {
        setVegetable((prevVegetables) =>
          prevVegetables.filter((i) => i.name !== item.name)
        )
      } else if (itemType === 'fruit') {
        setFruit((prevFruits) => prevFruits.filter((i) => i.name !== item.name))
      }
    }
  }

  return (
    <div className="flex gap-3 flex-col px-2 py-4 h-[100dvh] md:flex-row-reverse md:h-full">
      <Block name="Fruit" items={fruit} handleSelect={handleSelect} />
      <Block name="Vegetable" items={vegetable} handleSelect={handleSelect} />
      <Block name="Magic Box" items={current} handleSelect={handleSelect} />
    </div>
  )
}
