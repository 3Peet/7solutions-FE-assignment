import { useState } from 'react'
import Block from './card'
import { dataType } from '@/types/data'
import { DATA } from '@/config/todo'

type categorizeType = { [x: string]: dataType[] }

export default function TodoList() {
  const [categories, setCategories] = useState<categorizeType>({
    fruit: [],
    vegetable: [],
    rest: DATA,
  })

  const handleSelect = (item: dataType) => {
    const typeI = item.type.toLowerCase()

    if (categories.rest.some((e) => e.name === item.name)) {
      setCategories({
        ...categories,
        [typeI]: [...categories[typeI], item],
        rest: categories.rest.filter((e) => e.name !== item.name),
      })
    } else {
      setCategories({
        ...categories,
        rest: [...categories.rest, item],
        [typeI]: categories[typeI].filter((e) => e.name !== item.name),
      })
    }
  }

  return (
    <div className="flex gap-3 flex-col container px-2 py-4 h-[100dvh]">
      <Block
        title="Fruit"
        items={categories.fruit}
        handleSelect={handleSelect}
      />
      <Block
        title="Vegetable"
        items={categories.vegetable}
        handleSelect={handleSelect}
      />
      <Block
        title="Magic Box"
        items={categories.rest}
        handleSelect={handleSelect}
      />
    </div>
  )
}
