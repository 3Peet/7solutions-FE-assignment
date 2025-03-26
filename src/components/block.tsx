import { foodInfo } from '@/types/food'
import { Button } from './ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from './ui/card'
import { Rabbit } from 'lucide-react'

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
    <Card className="h-full md:w-full md:h-auto md:min-h-[400px]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        {items.length ? (
          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <Button
                variant="secondary"
                key={`${id}-${item.name.toLowerCase()}`}
                onClick={() => handleSelect(item)}
              >
                {item.emoji} {item.name}
              </Button>
            ))}
          </div>
        ) : (
          <div className="text-sm text-muted-foreground flex justify-center items-center flex-col h-full">
            <Rabbit strokeWidth={1.25} />
            <span>Your box is lonely.</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default Block
