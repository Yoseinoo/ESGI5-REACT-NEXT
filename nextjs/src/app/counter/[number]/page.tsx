import Counter from "@/app/ui/counter"

export default async function AboutPage({
  params,
}: {
  params: Promise<{ number: string }>
}) {
  const { number } = await params
  const initialValue = parseInt(number, 10)

  return (
    <Counter initialValue={initialValue} />
  )
}