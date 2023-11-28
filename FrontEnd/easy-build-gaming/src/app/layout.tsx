export const metadata = {
  title: 'EasyBuildGaming',
  description: 'Build Smart',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
