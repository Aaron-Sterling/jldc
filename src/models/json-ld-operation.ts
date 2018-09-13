// JSON-LD operation

import { JsonLdObject, JsonLd } from 'jsonld';

export type JsonLdOperation<T> = (source: JsonLdObject, options?: Object) => Promise<T>;
export type JsonLdModifierOperation<T> = (source: JsonLdObject, modifier: JsonLdObject, options?: any) => Promise<T>;