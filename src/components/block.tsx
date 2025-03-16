import { foodInfo } from '@/types/food'
import { Button } from './ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from './ui/card'

const Block = ({
  name,
  description,
  items,
  handleSelect,
}: {
  name: string
  description?: string
  items: foodInfo[]
  handleSelect: (x: foodInfo) => void
}) => {
  const id = name.replace(/ /g, '-').toLowerCase()

  return (
    <Card className="h-full md:w-[400px] md:h-auto md:min-h-[400px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {items &&
          items.map((item) => (
            <Button
              variant="secondary"
              key={`${id}-${item.name.toLowerCase()}`}
              onClick={() => handleSelect(item)}
            >
              {item.emoji} {item.name}
            </Button>
          ))}
      </CardContent>
    </Card>
  )
}

export default Block
