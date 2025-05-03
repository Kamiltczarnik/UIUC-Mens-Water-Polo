interface PageHeaderProps {
  title: string
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-[#13294B]">{title}</h1>
      <div className="h-1 w-24 bg-[#E84A27] mt-2"></div>
    </div>
  )
}
