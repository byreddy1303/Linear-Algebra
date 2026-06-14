ROLE & GOAL
Act as an expert GATE CS + GATE DA mentor and frontend developer. Build me the most comprehensive, deeply intuitive, interactivity-rich React mastery hub ever made for Linear Algebra — for GATE CS, GATE DA, and IIITH PGEE preparation.

This is NOT a summary or a cheat sheet. This is a complete learning system.

Every concept — no matter how small or "obvious" — must be explained from first principles with full intuition, worked examples, an interactive tool, GATE traps, PYQs, and practice problems. I want zero unknown situations when I face this topic in any exam.

ABSOLUTE RULES:
- Do NOT skip any concept, even if it seems minor or "just a definition"
- Do NOT say "this is straightforward" and move on — prove it
- Do NOT group concepts just to save space — if they deserve separate treatment, give it
- Build an interactive tool for EVERY concept, not just the "big" ones
- No shallow explanations anywhere. Ever.
- Size does not matter. Split into as many files as needed. Just build it all.

═══════════════════════════════════════════
MODULES — COMPLETE CONCEPT LIST
(Extracted from Go Classes GATE Engineering Mathematics — Linear Algebra)
═══════════════════════════════════════════

MODULE 1 — Foundations: Why Linear Algebra & What Vectors Really Are

Concept 1.1 — Why Study Linear Algebra?
- What real problems does it solve? (systems of equations, transformations, optimization, ML, graphics, compression)
- Why it is the backbone of ML/AI/data science (PCA, SVD, neural net weight matrices, transformations)
- Why GATE tests it heavily — what kind of thinking it tests
- Interactive: "LA in the Wild" — a clickable map showing 8 real-world domains with a one-paragraph explanation of exactly how linear algebra appears in each

Concept 1.2 — Vectors: What They Really Are
- The two views: geometric (arrow in space) vs algebraic (ordered tuple of numbers)
- Why both views must coexist in your head
- Vector addition and scalar multiplication — geometric and algebraic both
- The "same direction, different length" intuition for scalar multiplication
- Zero vector — what it means geometrically and why it's special
- Interactive: 2D vector playground — drag tip of vector, see components update; add two vectors and watch parallelogram law live; scalar multiply and watch the arrow stretch/flip

Concept 1.3 — Linear Combinations
- Definition: c₁v₁ + c₂v₂ + ... + cₖvₖ
- Why this operation is the CORE operation of all of linear algebra
- Geometric meaning: "where can you reach by mixing these vectors?"
- Examples with 2 vectors in ℝ², 3 vectors in ℝ³
- The "recipe" analogy — weights as ingredients, vectors as ingredients, result as the dish
- Interactive: linear combination builder — enter 2 vectors and drag sliders for c₁, c₂, watch the resulting vector trace out in real time; a "reachability" mode that sweeps all combinations and shades the reachable region

Concept 1.4 — Linear Dependence and Independence
- The geometric intuition FIRST: independent = no vector is "redundant" / "already reachable"
- Dependent = at least one vector lives in the span of the others
- Formal definition: c₁v₁ + ... + cₖvₖ = 0 implies all cᵢ = 0
- Why the zero vector makes any set dependent — prove it
- Why a single non-zero vector is always independent
- Why two vectors are dependent iff one is a scalar multiple of the other
- The determinant connection (preview — full detail in Module 7)
- GATE trap: "a set containing the zero vector is always linearly dependent" — why, proved
- GATE trap: independence is about the SET, not individual vectors
- GATE 2017 question — full solution
- Interactive: dependence checker — enter 2 or 3 vectors, plot them, live verdict (dependent/independent) with the geometric reason shown (e.g., "these three vectors all lie in the same plane — that's why they're dependent")

═══════════════════════════════════════════
MODULE 2 — Span, Subspaces & The Column Picture

Concept 2.1 — Span of a Set of Vectors
- Definition: all possible linear combinations
- Geometric cases: span of {0} = point, span of one non-zero vector = line, span of two independent vectors in ℝ² = all of ℝ², span of two independent vectors in ℝ³ = plane
- What it means to "fill" a space
- Interactive: span visualizer — toggle 1, 2, or 3 vectors in 2D/3D, watch the spanned subspace (point / line / plane / all of ℝ²) shade in; drag vectors and see the span update live

Concept 2.2 — Basis and Dimension (Foundational Version)
- Why we need a "minimal spanning set" — motivation from efficiency
- Definition of basis: linearly independent AND spans the space
- Dimension = number of vectors in any basis (prove this number is fixed)
- Standard basis vectors e₁, e₂, ..., eₙ
- Multiple valid bases for the same space — show two different bases for ℝ²
- Interactive: basis explorer — show two different bases for ℝ², toggle between them, see the same target vector expressed as different coordinate pairs in each basis; "which one is a basis?" quiz widget

Concept 2.3 — Matrix-Vector Multiplication Ax: The Column Picture
- The STANDARD view (row dot products) vs THE REAL VIEW (linear combination of columns)
- Why the column picture is the one that unlocks all of linear algebra
- Ax as: "the vector b is a linear combination of the columns of A, with weights given by x"
- Show this with a concrete 2×3 example both ways — prove they give the same result
- The column space of A = all vectors reachable by Ax for some x
- GATE trap: students who only know the row picture get confused by rank, null space, and eigenspace — fix this now
- Interactive: Ax column picture animator — enter a 2×2 or 2×3 matrix and a vector x; see the columns of A highlighted separately, each multiplied by the corresponding weight, then summed live with vectors on screen

Concept 2.4 — Matrix-Vector Multiplication: The Row Picture
- Row picture: each row gives one linear equation — Ax = b means b₁ = row₁ · x, etc.
- When to use row picture vs column picture (GATE decision rule)
- Interactive: row vs column picture toggle — same Ax = b shown simultaneously in both views, click to switch perspective

Concept 2.5 — Multiplying Two Matrices: Four Perspectives
- Standard (row × column dot products) — definition
- Column combination view: columns of AB are linear combinations of columns of A
- Row combination view: rows of AB are linear combinations of rows of B
- Outer product (sum of rank-1 matrices) view
- Why all four say the same thing — prove equivalence with a 2×2 example
- "My Walmart Interview Question" type: why AB ≠ BA in general, concrete counterexample
- GATE 2016 question — full solution with reasoning
- GATE 2014 question — full solution with reasoning
- Interactive: matrix multiplication perspectives — enter two 2×2 matrices, toggle between all four perspectives with each one animated/highlighted differently; sliders to step through each term

Concept 2.6 — Linear Combination of Independent Vectors is Unique
- Statement: if v₁, ..., vₖ are linearly independent and c₁v₁ + ... = d₁v₁ + ..., then cᵢ = dᵢ for all i
- Full proof
- Why this matters for GATE: coordinates are well-defined, basis representations are unique
- GATE 2017 question — reasoning-based solution
- Interactive: uniqueness demonstrator — show two "different" linear combinations of independent vectors equaling the same result, then prove algebraically why the coefficients must match; for dependent vectors, show how multiple representations exist

═══════════════════════════════════════════
MODULE 3 — Systems of Linear Equations: The Big Picture

Concept 3.1 — Why Solve Systems of Linear Equations?
- Real-world motivations: balancing chemical equations, traffic flow, circuit analysis, least squares fitting, computer graphics
- The question: "given a matrix transformation A, which inputs x produce output b?"
- Preview: 0, 1, or ∞ solutions — and nothing else is possible. Why?
- Interactive: "real world to Ax = b" translator — pick a scenario (e.g., traffic flow), see how it becomes a matrix equation step by step

Concept 3.2 — Writing a System as Ax = b
- Converting m equations in n unknowns to matrix form
- Augmented matrix [A | b] — what it encodes
- Why the augmented matrix is the working object (not the equation list)
- Interactive: equation-to-matrix converter — type up to 3 equations with up to 3 unknowns, see the matrix form assemble live

Concept 3.3 — Geometric Interpretation of Solutions
- 2×2 case: two lines — intersect (1 solution), parallel (0 solutions), same line (∞ solutions) — show all three
- 3×3 case: three planes — the 7 possible geometric configurations: unique intersection, parallel planes, coincident planes, etc.
- Why geometry forces exactly 0, 1, or ∞ solutions — no other possibility
- Interactive: geometric solution visualizer — 2D: drag two lines and watch solution type update live; 3D: enter a 3×3 system, see three planes rendered and their intersection type labeled

Concept 3.4 — Understanding Ax = b Intuitively (Deep Dive)
- The column picture: "does b lie in the column space of A?"
- If yes → solution(s) exist. If no → no solution.
- The null space: Ax = 0 — what inputs get mapped to zero?
- Full solution structure: x = x_particular + x_null (this is the complete picture)
- Why the homogeneous solution Ax = 0 matters even for non-homogeneous problems
- Interactive: column space membership visualizer — for a 2×3 matrix, shade the column space, place a target vector b, instantly see whether b is reachable

═══════════════════════════════════════════
MODULE 4 — Echelon Form, Gaussian Elimination, Rank & Null Space

Concept 4.1 — Echelon Form and Pivot Columns
- What row operations are and why they preserve the solution set (prove this)
- Three legal row operations — definition and intuition for each
- Row Echelon Form (REF) — definition with visual examples
- Pivot positions and pivot columns — how to identify them
- Free columns — what they mean (a free variable exists here)
- Why pivots must be in strictly lower rows — the staircase structure
- Interactive: REF identifier — enter a matrix, click "find REF," see each row operation animated step by step with explanation; highlight pivots and free columns with different colors

Concept 4.2 — Gaussian Elimination
- The algorithm step by step — forward elimination
- What to do when a zero appears in the pivot position (row swaps)
- Worked example: 3×3 system with partial pivoting needed
- When elimination reveals inconsistency (0 = nonzero row)
- Connection: each step is multiplying by an elementary matrix (preview for LU)
- Interactive: Gaussian elimination stepper — enter any 3×3 augmented matrix [A|b], step through each elimination operation one at a time, see the matrix update, the operation labeled, and a "why?" explanation for each step

Concept 4.3 — Rank of a Matrix
- Definition: rank = number of pivot columns = dimension of column space
- Rank = dimension of row space (why these are equal — the surprising fact)
- rank(A) ≤ min(m, n) always — why
- Full rank matrices — what it means for square, tall, and wide matrices
- GATE 1994 question on rank — full solution
- How rank connects to: independence of columns, independence of rows, invertibility
- GATE trap: "rank of A = rank of Aᵀ" — prove it, don't just memorize
- Interactive: rank visualizer — enter a matrix, see the REF produced, pivot columns highlighted, rank displayed; drag one row to make it a linear combination of others and watch the rank drop live

Concept 4.4 — Rank-Nullity Theorem
- Nullity = number of free variables = dimension of null space
- Statement: rank(A) + nullity(A) = n (number of columns)
- Full proof from first principles
- Intuition: the "information lost" by A plus the "information preserved" always equals the total input dimension
- Examples: 3×4 matrix with rank 2 → nullity 2; 3×3 full rank → nullity 0
- GATE implications: if you know rank, you know nullity, and vice versa
- Interactive: rank-nullity balance — enter a matrix, see rank and nullity computed, a bar chart showing rank + nullity = n, and descriptions of what each means geometrically

Concept 4.5 — Solving Ax = b: The Complete Solution
- Step 1: find a particular solution (set free variables to 0, solve for pivots)
- Step 2: find the null space (solve Ax = 0 — the homogeneous system)
- Step 3: complete solution = particular + any null space vector
- Why adding null space vectors still satisfies Ax = b — prove it
- Five different question types on Ax = b — each solved completely:
  (a) unique solution, (b) no solution, (c) infinitely many with 1 free variable,
  (d) infinitely many with 2 free variables, (e) underdetermined (more unknowns than equations)
- GATE 2021 question: free variables in non-homogeneous — full solution
- Interactive: complete solution builder — enter A and b, see the particular solution found step by step, then the null space basis computed, then the full solution x = xₚ + c·xₙ displayed with sliders to vary the null space coefficient

Concept 4.6 — More Than One Free Variable in Ax = 0
- When does this happen? (rank < n, and specifically by how much)
- How to read off multiple null space basis vectors from RREF
- The null space as a subspace — dimension = nullity
- Concrete example: 3×5 matrix with rank 2 → null space of dimension 3
- Interactive: multi-free-variable explorer — enter a matrix that has 2 free variables, see both null space vectors found, with sliders to build any null space vector as a linear combination of the basis vectors

Concept 4.7 — Solution Theory: Conditions Based on Rank
- The complete classification table:
  rank(A) vs rank([A|b]) vs n (columns) → solution type
- Case 1: rank(A) ≠ rank([A|b]) → no solution (inconsistent)
- Case 2: rank(A) = rank([A|b]) = n → unique solution
- Case 3: rank(A) = rank([A|b]) < n → infinitely many solutions
- Proof of each case from first principles
- GATE trap: "rank(A) = rank([A|b])" is necessary but not sufficient for unique solution
- GATE questions on rank and number of solutions — full solutions
- Interactive: solution type predictor — enter a matrix A and vector b, compute both ranks, classify the system, show which case applies with a geometric picture

Concept 4.8 — [Bonus] RREF and Linearly Independent Columns via Elimination
- Row Reduced Echelon Form — what makes it "reduced" beyond REF
- The back-substitution step: eliminating upward
- Reading off the null space directly from RREF
- How RREF reveals the exact linear dependence relations among columns
- Interactive: REF → RREF stepper — start from REF, step through back-substitution, arrive at RREF; show the solution directly readable from the final form

═══════════════════════════════════════════
MODULE 5 — Determinants, Invertibility & Cramer's Rule

Concept 5.1 — What the Determinant Really Is
- Geometric meaning FIRST: for 2×2, det = signed area of parallelogram formed by columns; for 3×3, det = signed volume of parallelepiped
- Why "signed": orientation (clockwise vs counterclockwise)
- det = 0 means the transformation collapses space to lower dimension
- det = 1 means the transformation preserves volume (rotations, reflections)
- |det| = the "volume scaling factor" of the transformation
- Interactive: determinant geometry — enter a 2×2 matrix, see the unit square transform into a parallelogram, watch the signed area (determinant) update live as you drag the column vectors

Concept 5.2 — Computing Determinants
- 2×2 formula: ad - bc — derive from geometry
- 3×3 via cofactor expansion — any row or column (prove they all give the same answer)
- Sarrus' rule for 3×3 — what it is and its limitation (only works for 3×3)
- Properties of determinants:
  - det(AB) = det(A)det(B) — prove
  - det(Aᵀ) = det(A) — prove
  - det(cA) = cⁿ det(A) — prove
  - Row swap flips sign
  - Row with all zeros → det = 0
  - Adding a multiple of one row to another doesn't change det
  - Triangular matrix: det = product of diagonal entries
- GATE trap: det(A + B) ≠ det(A) + det(B) — concrete counterexample
- Interactive: cofactor expansion animator — enter a 3×3 matrix, choose expansion row, see each cofactor highlighted and computed, running total shown

Concept 5.3 — Inverse of a Matrix
- Definition: A⁻¹ such that AA⁻¹ = A⁻¹A = I
- When does an inverse exist? Exactly when det(A) ≠ 0 — prove the connection
- 2×2 inverse formula — derive it from scratch (not memorize)
- General inverse via row reduction: [A | I] → [I | A⁻¹]
- Why the inverse is unique (if it exists)
- Properties: (AB)⁻¹ = B⁻¹A⁻¹ — prove; (Aᵀ)⁻¹ = (A⁻¹)ᵀ — prove
- GATE trap: "if AB = I then A and B are inverses" — only true for square matrices, why
- Interactive: inverse via row reduction — enter a 2×2 or 3×3 matrix, step through [A|I] → [I|A⁻¹] with each row operation labeled; for singular matrices, show where it breaks

Concept 5.4 — Cramer's Rule
- Statement: for Ax = b with A invertible, xᵢ = det(Aᵢ)/det(A)
- Derivation — don't just state it, show why
- When to use it: theoretically useful, computationally insane for large n
- GATE usage: Cramer's rule questions are about EXISTENCE and FORMULAS, not 4×4 computation
- GATE trap: applying Cramer's rule when det(A) = 0 (undefined)
- Interactive: Cramer's rule visualizer — 2×2 and 3×3 systems, see Aᵢ matrix formed for each variable, determinants computed, ratio shown; toggle det(A) = 0 to see why it breaks

═══════════════════════════════════════════
MODULE 6 — Eigenvalues & Eigenvectors

Concept 6.1 — What Eigenvalues and Eigenvectors Actually Are
- The "special direction" intuition — most vectors get both rotated AND scaled by A; eigenvectors only get SCALED
- Definition: Av = λv, v ≠ 0
- λ is the eigenvalue (how much scaling), v is the eigenvector (the special direction)
- Why eigenvectors are directions, not specific vectors (cv is also an eigenvector)
- Real examples: identity matrix (every vector is an eigenvector with λ=1), projection matrix (λ=1 for vectors in the plane, λ=0 for the normal)
- Interactive: eigenvector "special direction" demo — enter a 2×2 matrix, plot 8 random vectors under transformation Ax (as arrows before and after), watch non-eigenvectors rotate+scale; then show the eigenvectors highlighted as the ones that ONLY stretch — they stay on the same line through origin

Concept 6.2 — Characteristic Equation
- Why Av = λv rewrites to (A - λI)v = 0
- Why we need det(A - λI) = 0 — because we need a non-trivial (non-zero) solution
- The characteristic polynomial: p(λ) = det(A - λI)
- For n×n matrix, this is a degree-n polynomial — so n eigenvalues (counting multiplicity, over ℂ)
- Interactive: characteristic polynomial builder — enter a 2×2 or 3×3 matrix, see (A - λI) assembled symbolically, the determinant expanded, and the polynomial displayed; roots labeled on a number line

Concept 6.3 — Solving for Eigenvalues Then Eigenvectors
- Step 1: solve det(A - λI) = 0 for λ
- Step 2: for each λ, solve (A - λI)v = 0 for v
- Eigenspace for λ = null space of (A - λI)
- Worked example 1: 2×2 matrix, distinct real eigenvalues
- Worked example 2: 2×2 matrix, repeated eigenvalue
- Worked example 3: 3×3 matrix
- GATE trap: eigenvectors are not unique — the eigenSPACE is, but individual eigenvectors aren't
- Interactive: eigenvalue-eigenvector solver — enter a 2×2 matrix, see characteristic equation solved step by step, then eigenvectors found via row reduction of (A - λI), final eigenvectors plotted

Concept 6.4 — Algebraic vs Geometric Multiplicity
- Algebraic multiplicity: how many times λ appears as a root of the characteristic polynomial
- Geometric multiplicity: dimension of eigenspace = nullity of (A - λI)
- Key inequality: geometric multiplicity ≤ algebraic multiplicity (always)
- When they're equal vs when they're not — worked examples for both
- GATE trap: "a 3×3 matrix with a repeated eigenvalue might still be diagonalizable" — if gm = am
- Interactive: multiplicity explorer — show 3 matrices: one with distinct eigenvalues, one with repeated eigenvalue and gm = am, one with repeated eigenvalue and gm < am; for each, compute both multiplicities and explain what it means

Concept 6.5 — Three Examples With Repeating Lambda (In Detail)
- Example 1: Repeated λ but still 2 independent eigenvectors (diagonalizable)
- Example 2: Repeated λ with only 1 independent eigenvector (not diagonalizable — defective)
- Example 3: 3×3 with triple repeated λ — all three cases: gm = 3, gm = 2, gm = 1
- Full worked solutions — not just results
- Interactive: repeating lambda case explorer — side-by-side display of all three cases with the eigenspaces visualized

Concept 6.6 — Symmetric Matrices Have n Linearly Independent Eigenvectors
- Theorem: a real symmetric matrix (A = Aᵀ) always has n LI real eigenvectors
- Why this is remarkable — non-symmetric matrices can fail to have n LI eigenvectors
- Proof sketch: eigenvectors for distinct eigenvalues of symmetric matrices are orthogonal — show why
- Consequence: symmetric matrices are always diagonalizable
- ML connection: covariance matrices, Hessians, PCA — all symmetric → always diagonalizable
- Interactive: symmetric vs non-symmetric — generate random symmetric and non-symmetric matrices, compare their eigenvalue/eigenvector structure, show that symmetric one always produces n LI eigenvectors

Concept 6.7 — Two Magical Properties of Eigenvalues
- Property 1: trace(A) = sum of all eigenvalues (Σλᵢ) — prove from characteristic polynomial
- Property 2: det(A) = product of all eigenvalues (Πλᵢ) — prove from characteristic polynomial
- Why these are "magical" — you can find eigenvalues for a 2×2 instantly if you know trace and det
- GATE applications — several questions are solvable in <30 seconds using these
- Interactive: trace-det shortcut trainer — given a 2×2 matrix, use trace and det to set up λ² - (trace)λ + det = 0, solve it, verify against full characteristic polynomial

═══════════════════════════════════════════
MODULE 7 — Eigenvalue Power Tools (Advanced)

Concept 7.1 — Rank and Eigenvalues
- rank(A) = number of non-zero eigenvalues (counting multiplicity) — for diagonalizable matrices
- Rank-eigenvalue connection: if λ = 0 is an eigenvalue, then det(A) = 0, so A is singular
- Null space of A = eigenspace for λ = 0
- GATE questions combining rank and eigenvalue conditions
- Interactive: rank-eigenvalue connection — enter a matrix, display its eigenvalues, its rank, and highlight which eigenvalues are zero and how they account for the rank deficit

Concept 7.2 — Cayley-Hamilton Theorem
- Statement: every matrix satisfies its own characteristic equation
- If p(λ) = λ² - 5λ + 6, then p(A) = A² - 5A + 6I = 0
- Proof sketch (for 2×2)
- Applications: computing high powers of A (e.g., A¹⁰ using the recurrence from C.H.)
- Computing A⁻¹ using C.H. (express A⁻¹ in terms of lower powers of A)
- GATE questions using Cayley-Hamilton — worked solutions
- Interactive: Cayley-Hamilton verifier + power computer — enter a 2×2 or 3×3 matrix, see its characteristic polynomial, verify p(A) = 0 numerically, then use the recurrence to compute A⁴, A⁵, etc., showing each step

Concept 7.3 — Eigenvalues of AB and BA
- Key theorem: AB and BA have the same NON-ZERO eigenvalues (even if AB ≠ BA)
- Proof: if ABv = λv with λ ≠ 0, then BA(Bv) = λ(Bv) — show that Bv is an eigenvector of BA
- Why zero eigenvalues may differ (show an example where AB has a zero eigenvalue but BA doesn't)
- Special case: if A is m×n and B is n×m (non-square), AB is m×m and BA is n×n, but they share non-zero eigenvalues
- GATE trap: "AB and BA have the same eigenvalues" is FALSE — only non-zero ones match
- Interactive: AB vs BA eigenvalue comparer — enter two 2×2 matrices A and B, compute eigenvalues of AB and BA side by side, highlight which ones match and why

Concept 7.4 — Eigenvalues of Powers of A
- If Av = λv, then A²v = λ²v, Aⁿv = λⁿv — prove each
- Eigenvalues of A⁻¹ are 1/λ (when A is invertible) — prove
- Eigenvalues of A - cI are λ - c — prove
- Eigenvalues of p(A) for polynomial p are p(λ) — the general rule
- GATE questions: "eigenvalues of A³ - 2A + I?" — solve instantly using the rule
- Interactive: eigenvalue function explorer — enter a matrix A and a polynomial p(x), compute p(A) and show its eigenvalues are p(λᵢ); slider to change the polynomial

Concept 7.5 — Matrix Diagonalization
- When can A be written as A = PDP⁻¹? When A has n linearly independent eigenvectors
- P = matrix of eigenvectors, D = diagonal matrix of eigenvalues
- How to construct P and D step by step
- Why diagonalization is useful: Aⁿ = PDⁿP⁻¹ — computing powers becomes trivial
- When is A NOT diagonalizable? When gm < am for some eigenvalue (defective matrix)
- Connection: symmetric matrices are always diagonalizable (from Module 6)
- Interactive: diagonalization constructor — enter a 2×2 matrix, find eigenvectors, assemble P and D, verify A = PDP⁻¹ numerically, then compute A³ using PDⁿP⁻¹ and verify

Concept 7.6 — Three Tough GATE PYQs on Eigenvalues
- PYQ 1 (difficulty: hard) — full solution with reasoning
- PYQ 2 (difficulty: hard) — full solution with reasoning
- PYQ 3 (difficulty: hard) — full solution with reasoning
- Pattern analysis: what made each question hard and how to spot the trap in future
- Interactive: "GATE trap detector" — present each question, ask me to identify the trap before revealing the solution

═══════════════════════════════════════════
MODULE 8 — Matrix Decompositions & Types of Matrices

Concept 8.1 — LU Decomposition
- Motivation: why decompose? Solving Ax = b multiple times with different b is cheap with LU
- What LU decomposition says: A = LU, where L is lower triangular with 1s on diagonal, U is upper triangular
- The connection to Gaussian elimination: L stores the elimination multipliers
- When LU exists without row swaps, and when you need PLU (with permutation matrix P)
- Solving Ax = b via LU: first solve Ly = b (forward substitution), then Ux = y (back substitution)
- Interactive: LU decomposition stepper — enter a 3×3 matrix, watch Gaussian elimination produce U while building L from the multipliers, step by step; then solve Ax = b by forward + back substitution

Concept 8.2 — Types of Matrices (Every Kind — Full Detail)
For EACH type: definition, geometric meaning, key properties, eigenvalue behavior, GATE relevance, example, and a quick interactive check.

- Symmetric: A = Aᵀ. Real eigenvalues, orthogonal eigenvectors, always diagonalizable.
- Skew-Symmetric: A = -Aᵀ. Diagonal entries = 0. Eigenvalues are 0 or pure imaginary.
- Orthogonal: AᵀA = I, equivalently A⁻¹ = Aᵀ. Columns form orthonormal basis. det = ±1. Eigenvalues have |λ| = 1.
- Idempotent: A² = A. Eigenvalues are only 0 or 1. Rank = trace. Represents projection.
- Nilpotent: Aᵏ = 0 for some k. All eigenvalues are 0. det = 0.
- Involutory: A² = I, so A = A⁻¹. Eigenvalues are ±1.
- Positive Definite: xᵀAx > 0 for all x ≠ 0. All eigenvalues > 0. Used in optimization, ML.
- Positive Semi-Definite: xᵀAx ≥ 0. All eigenvalues ≥ 0.
- Diagonal: only diagonal entries, off-diagonal = 0.
- Triangular (upper/lower): determinant = product of diagonal.
- Singular vs Non-Singular: det = 0 vs det ≠ 0.
- GATE trap: "idempotent → rank = trace" — prove this using eigenvalues
- GATE trap: "nilpotent but not zero matrix" — eigenvalues all zero but matrix is not zero
- Interactive: matrix type identifier — enter a matrix, get a checklist of all types it satisfies (a matrix can be simultaneously idempotent AND symmetric, for example); show the verification for each checked property

═══════════════════════════════════════════
ALSO BUILD — MANDATORY FEATURES

Cheat Sheet (Module 9 tab)
One scrollable page with every formula, theorem, property, and classification from all modules:
- Linear (in)dependence condition
- Rank-Nullity theorem
- Solution classification table (rank(A), rank([A|b]), n → solution type)
- Determinant properties (all 8+)
- Inverse properties
- Eigenvalue properties (trace = Σλᵢ, det = Πλᵢ, powers, functions)
- Cayley-Hamilton statement
- AB/BA eigenvalue theorem
- Diagonalizability condition
- Matrix types table (all 12 types with their key property in one line each)
- LU decomposition steps

Concept Dependency Map
A visual directed graph showing EXACTLY which concepts must be understood before others:
Independence → Span → Column Space → Rank → Solution Theory
Independence → Eigenspaces → Eigenvalues → Diagonalization
etc.
Make it interactive: click any node to jump to that concept

Full GATE Mock Test (Module 10 tab)
- 20 questions, mixed difficulty, from all modules
- Timed (40 minutes, or user-set)
- Progressive hints available but cost "penalty points"
- Final score with per-module breakdown
- Weak spot analysis: "you got 3/4 correct in Module 1 but 1/3 in Module 7 — focus here"

Progress Tracker
- Per concept: Not Started / In Progress / Done / Needs Revision / Mastered
- Per module: percentage complete + color coding
- Overall radar chart showing strength across all 8 content modules
- Persist with localStorage

Jump-to-Concept Search
- Type any keyword ("null space", "Cramer", "nilpotent", "RREF"), jump to that concept instantly

═══════════════════════════════════════════
INTERACTIVE TOOL RULES
═══════════════════════════════════════════

Every single concept gets its own interactive tool. No exceptions.
Tools must not just demonstrate — they must let me manipulate inputs and see outputs change.
Every tool must include:
  - A "What am I seeing?" label so the purpose is always clear
  - A "Try this" prompt suggesting a specific input that reveals a non-obvious insight
  - Error/edge case handling with an explanation (e.g., what happens when you enter a singular matrix)

═══════════════════════════════════════════
STYLE & EXPLANATION RULES
═══════════════════════════════════════════

- Explain like a brilliant senior who has taught this 100 times and memorized exactly where every student gets confused
- Never use the phrase "it is easy to see" or "trivially"
- Every formula must come AFTER its geometric/intuitive motivation, never before
- Every proof must include a one-sentence plain-English summary of "what the proof is really saying"
- GATE traps must be called out in a visually distinct, explicitly labeled "⚠ GATE TRAP" callout
- ML/AI/CS connections must be mentioned wherever relevant (eigenvalues in PCA, rank in data compression, null space in underdetermined systems in ML, etc.)

═══════════════════════════════════════════
SCALE & DELIVERY RULES
═══════════════════════════════════════════

This is a very large build. Split into as many separate React files as needed — one per module is fine.
Each file must:
  - Share the same visual design system (colors, fonts, component style)
  - Begin with a top nav showing all modules (clicking jumps to that file)
  - End with a "→ Next Module: [Name]" button
  - Be completely self-contained (no imports between files)

Build module by module. After each module is done, I will say "continue" for the next.
Do NOT summarize or abbreviate any concept to save space.
If a concept deserves 500 words and 2 interactive tools, give it that.