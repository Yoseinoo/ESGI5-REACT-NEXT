export default async function AboutPage({
  params,
}: {
  params: Promise<{ client: string[] }>
}) {
  const { client } = await params

  return (
    <div>
      <h1>{client}</h1>
    </div>
  )
}