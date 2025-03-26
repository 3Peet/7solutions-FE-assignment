import { useRef, useState } from 'react'

import Block from './block'
import { FOOD_DATA } from '@/constants/food'
import { foodInfo } from '@/types/food'
import TaskHeader from './task-header'

const TIME_OUT = 5_000 // 5 seconds

type categoriesType = { [x: string]: foodInfo[] }
type timerType = { [key: string]: NodeJS.Timeout }

export default function TodoList() {
  const timerRef = useRef<timerType>({})
  const [categories, setCategories] = useState<categoriesType>({
    fruit: [],
    vegetable: [],
    uncategorized: FOOD_DATA,
  })

  // Move items to the uncategorized box
  const handleDelete = (item: foodInfo) => {
    const itemType = item.type.toLowerCase()

    setCategories((prev) => {
      const isAlreadyDeleted = prev.uncategorized.some(
        (e) => e.name === item.name
      )

      if (isAlreadyDeleted) {
        clearTimeout(timerRef.current[item.name])
        delete timerRef.current[item.name] // Clean up timer ref.
        return prev
      }

      delete timerRef.current[item.name] // Clean up timer ref.
      return {
        ...prev,
        [itemType]: prev[itemType].filter((e) => e.name !== item.name),
        uncategorized: [...prev.uncategorized, item],
      }
    })
  }

  // Categorize the items
  const handleCategorize = (item: foodInfo) => {
    const itemType = item.type.toLowerCase()

    setCategories((prev) => ({
      ...prev,
      [itemType]: [...prev[itemType], item],
      uncategorized: prev.uncategorized.filter((e) => e.name !== item.name),
    }))

    // Delete it after time outed.
    timerRef.current[item.name] = setTimeout(() => {
      handleDelete(item)
    }, TIME_OUT)
  }

  const handleSelect = (item: foodInfo) => {
    const isUncategorized = categories.uncategorized.some(
      (e) => e.name === item.name
    )

    if (isUncategorized) {
      handleCategorize(item)
    } else {
      handleDelete(item)
    }
  }

  const { fruit, vegetable, uncategorized } = categories

  return (
    <>
      <TaskHeader
        title="1. Auto Delete Todo List"
        description="Click the items in the magic box to categorize them so they will be
          temporarily grouped."
      />
      <div className="flex gap-3 flex-col h-[100lvh] md:flex-row-reverse md:h-full">
        <Block name="Fruit" items={fruit} handleSelect={handleSelect} />
        <Block name="Vegetable" items={vegetable} handleSelect={handleSelect} />
        <Block
          name="Magic Box"
          description={`The item will be categorized for ${TIME_OUT / 1000} seconds!`}
          items={uncategorized}
          handleSelect={handleSelect}
        />
      </div>
    </>
  )
}
