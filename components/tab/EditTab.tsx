import { classNames } from "@/utils/classNames";

const tabs = [
  { name: "プロフィール", href: '/edit/profile', id: "profile" },
  { name: "概要", href: '/edit/about', id: "about" },
]

type Props = {
  current: "profile" | "about"
}

export default function EditTab({ current }: Props) {
  return (
    <div className="block border-b border-gray-200">
      <nav className="-mb-px flex space-x-4" aria-label="Tabs">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href={tab.href}
            className={classNames(
              tab.id === current
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              'whitespace-nowrap border-b-2 py-3 px-1 text-base font-medium'
            )}
            aria-current={tab.id === current ? 'page' : undefined}
          >
            {tab.name}
          </a>
        ))}
      </nav>
    </div>
  )
}