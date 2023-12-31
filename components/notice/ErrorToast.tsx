import { Fragment, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  show: boolean
  closeToast: () => void
  text: string
}

/**
 * エラー時のトーストです
 */
export default function ErrorToast({ show, closeToast, text }: Props) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => { // タイムアウトを設定
        closeToast()
      }, 2500)

      return () => {
        clearTimeout(timer) // Toastがアンマウントされるときにタイマーをクリア
      }
    }
  }, [show, closeToast])

  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="pointer-events-auto w-full max-w-sm overflow-hidden
               rounded-lg bg-red-200 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start text-red-900">
                  <div className="flex-shrink-0">
                    <XCircleIcon className="h-6 w-6" aria-hidden="true"/>
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium">{text}</p>
                    {/*<p className="mt-1 text-sm text-gray-500">サブテキスト</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
