import { Fragment, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

type Props = {
  show: boolean
  closeToast: () => void
  text: string
}

/**
 * 成功時のトーストです
 */
export default function SuccessToast({ show, closeToast, text }: Props) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => { // 3. 2秒のタイムアウトを設定
        closeToast()
      }, 2500)

      return () => {
        clearTimeout(timer) // 4. Toastがアンマウントされるときにタイマーをクリア
      }
    }
  }, [show])

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
               rounded-lg bg-green-600 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start text-white">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6" aria-hidden="true"/>
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-bold">{text}</p>
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
