import cast from '../src/cast';

test('Integers in string are casted', () => {
    expect(cast('15')).toBe(15);
});
test('Decimals in string are casted', () => {
    expect(cast('15.65')).toBe(15.65);
});

test('Booleans in strings are casted', () => {
    expect(cast('true')).toBe(true);
    expect(cast('on')).toBe(true);
    expect(cast('false')).toBe(false);
    expect(cast('off')).toBe(false);
});

test('Number values with leading 0 in strings are left intact', () => {
    expect(cast('007')).toBe('007');
});

test('Big number values in strings are left intact', () => {
    expect(cast('1413121110987654321')).toBe('1413121110987654321');
});

test('Other values are left intact', () => {
    expect(cast('foo')).toBe('foo');
    expect(cast(['foo'])).toStrictEqual(['foo']);
    expect(cast({foo: 'bar'})).toStrictEqual({foo: 'bar'});
    expect(cast(null)).toStrictEqual(null);
    expect(cast(undefined)).toStrictEqual(undefined);
});
