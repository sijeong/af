import { $enum } from "ts-enum-util";

export enum category {
    Science = 'SC',
    Literature = 'LT',
    Mathematics = 'MT'
  }
  
  export enum articleScienceCateory {
    Physics = 'PY',
    Chemistry = 'CM',
    Psychology = 'PS'
  }
  
  export enum articleLiteratureCategory {
    Novel = 'NV',
    Essay = 'ES',
    BioGraphy = 'BG'
  }
  
  export enum articleMathematicsCategory {
    Geometry = 'GM',
    NumberTheory = 'NT',
    Topology = 'TO'
  }

  export const categoryParser = (value) => {
    return $enum(category).getKeyOrDefault(value).toString()
  }
  export const subCategoryParser = (value) => {
    const val = value
    if (Object.keys(articleLiteratureCategory).some(x => x == $enum(articleLiteratureCategory).getKeyOrDefault(val))) {
      return $enum(articleLiteratureCategory).getKeyOrDefault(val).toString()
    } else if (Object.keys(articleMathematicsCategory).some(x => x == $enum(articleMathematicsCategory).getKeyOrDefault(val))) {
      return $enum(articleMathematicsCategory).getKeyOrDefault(val).toString()
    } else if (Object.keys(articleScienceCateory).some(x => x == $enum(articleScienceCateory).getKeyOrDefault(val))) {
      return $enum(articleScienceCateory).getKeyOrDefault(val).toString()
    }
  }