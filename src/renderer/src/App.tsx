import { RootLayout, Sidebar, Content, TopBar, ActionButtonsRow } from '@renderer/components/index'
import styles from '@renderer/styles/pages/app.module.scss'

function App(): JSX.Element {
  const ipcHandle = (): Promise<void> => window.electron.sendPing()

  return (
    <>
      <TopBar />
      <RootLayout className={styles.wrapper}>
        <Sidebar className={styles.sidebar}>
          <ActionButtonsRow className={styles.button} />
          Sidebar
        </Sidebar>
        <Content className={styles.content}>
          {' '}
          Build an Electron app with <span className="react">React</span>
          &nbsp;and <span className="ts">TypeScript</span>
        </Content>
      </RootLayout>
    </>
  )
}

export default App
