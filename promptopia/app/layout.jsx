import '@styles/globals.css';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share Ai Prompts'
}

const RootLayout = ({Children}) => {
  return (
    <html Lang = "en">
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                {Children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout