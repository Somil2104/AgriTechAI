export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Await the `params` promise to retrieve `id`

  if (!id) {
    return <div>Product not found</div>;
  }

  // Determine the class name based on `id`
  const containerClass =
    id === '1'
      ? 'h-screen flex flex-col items-center justify-center bg-blue-500'
      : 'h-screen flex flex-col items-center justify-center bg-red-500';

  return (
    <div className={containerClass}>
      <h1 className="text-white">Product Page</h1>
    </div>
  );
}
