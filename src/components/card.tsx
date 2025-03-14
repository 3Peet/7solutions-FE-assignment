import { memo } from 'react'
import { dataType } from '@/types/data'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

const Block = memo(
  ({
    title,
    items,
    handleSelect,
  }: {
    title: string
    items: dataType[]
    handleSelect: (x: dataType) => void
  }) => {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          {items.length
            ? items.map((item) => (
                <Button
                  variant="secondary"
                  key={`${item.type}-${item.name}`}
                  onClick={() => handleSelect(item)}
                >
                  {item.emoji} {item.name}
                </Button>
              ))
            : 'No Data'}
        </CardContent>
      </Card>
    )
  }
)

export default Block
