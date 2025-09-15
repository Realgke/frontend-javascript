// task_5/js/main.ts

// ✅ Interface for MajorCredits
export interface MajorCredits {
  credits: number;
  brand: "major"; // unique brand property
}

// ✅ Interface for MinorCredits
export interface MinorCredits {
  credits: number;
  brand: "minor"; // unique brand property
}

// ✅ Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major", // must include brand
  };
}

// ✅ Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor", // must include brand
  };
}
