import { inline } from "./inline.js"   //"inline" é um nome único para mudar o nome deve-se usar por ex "nome as inline. O "Export nomeado" pode ser exportado quantas vezes quiser
import defaultInline from "./inline.js" //o nome é flexivel, "defaultInline" pode ser alterado. "Export Default" só pode ter 1 por arquivo
import exportDefault, { group, a, b, c, d } from "./non_inline.js" // consigo informar exportações na mesma linha


inline()
defaultInline()

group()
exportDefault()