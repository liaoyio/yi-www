module.exports = {
  bracketSpacing: true,
  semi: false,
  trailingComma: 'none',
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  importOrder: [
    '(^(react/(.*)$)|^(react$))|(^(next/(.*)$)|^(next$))',
    '<THIRD_PARTY_MODULES>',
    '^@/src/(.*)$',
    '^@/styles/(.*)$',
    '^@/public/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/pages/(.*)$',
    '^#/(.*)$'
  ],
  importOrderSortSpecifiers: true,
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss']
}
