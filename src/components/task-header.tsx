export default function TaskHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="px-2 space-y-1">
      <h2 className="text-xl font-bold ">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
