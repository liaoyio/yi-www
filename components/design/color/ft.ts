import babel from 'prettier/plugins/babel'
import prettierPluginEstree from 'prettier/plugins/estree'
import prettier from 'prettier/standalone'

export const formatCode = (codeStr: string) => {
  return prettier
    .format(codeStr, {
      bracketSpacing: true,
      semi: true,
      trailingComma: 'all',
      printWidth: 100,
      tabWidth: 2,
      singleQuote: true,
      parser: 'babel',
      plugins: [babel, prettierPluginEstree]
    })
    .then((res: string) => res.trim())
}
