const navigation = {
  main: [
    { name: "TOP", href: "/" },
    { name: "X(Twitter)", href: "https://twitter.com/totsumaru_dot" },
    { name: "問い合わせ", href: "https://forms.gle/3nrZEpbxt5zh22gi7" },
    { name: "利用規約", href: "https://daffy-hamburger-7f6.notion.site/Profio-1064ab59ca564cf39900f359c3283196?pvs=4" },
    {
      name: "プライバシーポリシー",
      href: "https://daffy-hamburger-7f6.notion.site/a272c9b0d23f44f8a77c61ebfe77e5af?pvs=4"
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} target="_blank" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 ArGate, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
