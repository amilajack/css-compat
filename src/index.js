// @flow
type CSSRulesToCaniuseMapping = {
  [x: string]: Array<Rule>
};

type Rule = {
  property: string,
  record: string
};

type CanIUseRecord = {
  data: {
    [x: string]: {
      [x: string]: string
    }
  }
};

/**
 * A mapping of css rules and properties to caniuse rules
 */
export const mappings: CSSRulesToCaniuseMapping = {
  display: [
    {
      property: 'flex',
      record: 'flexbox'
    },
    {
      property: 'grid',
      record: 'css-grid'
    }
  ]
};


export default function Validate(rule: string, propety: string, caniuseDB: CanIUseRecord) {

}
