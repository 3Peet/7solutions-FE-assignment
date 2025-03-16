import { dataType } from '@/types/data'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

const Block = ({
  name,
  items,
  handleSelect,
}: {
  name: string
  items: dataType[]
  handleSelect: (x: dataType) => void
}) => {
  return (
    <Card className="h-full md:w-[400px] md:h-auto">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {items &&
          items.map((item) => (
            <Button
              variant="secondary"
              key={`${name}-${item.name}`}
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
