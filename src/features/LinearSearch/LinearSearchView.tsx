import { useMemo, useState } from "react";
import { generateRandomArray, linearSearch } from "./linearSearch";

export const LinearSearchView = () => {
  const [arr, setArr] = useState<number[]>(() =>
    generateRandomArray(10, -500, 500)
  );
  const [target, setTarget] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const hint = useMemo(() => `Array length: ${arr.length}`, [arr.length]);

  return (
    <div>
      <h2>Linear Search</h2>
      <div>{hint}</div>

      <div>
        <button
          onClick={() => {
            setArr(generateRandomArray(10, -500, 500));
            setResult(null);
          }}
        >
          Generate array
        </button>

        <label htmlFor="target">
          Target:
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
          />
        </label>

        <button onClick={() => setResult(linearSearch(arr, target))}>
          Search
        </button>

        <div>
          {arr.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        </div>

        <div>
          <strong>Result :</strong>
          {result === null
            ? "-"
            : result === -1
            ? "not found"
            : `found at index ${result}`}
        </div>
      </div>
    </div>
  );
};
