// JSON-LD operation

import { JsonLdObject, JsonLd } from 'jsonld';
import { Promise as OldPromise } from 'es6-promise';

export type JsonLdOperation<T> = (source: JsonLdObject, options?: Object) => OldPromise<T>;
export type JsonLdModifierOperation = (source: JsonLdObject, modifier: JsonLdObject, options?: any) => OldPromise<JsonLd>;