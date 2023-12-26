export const DOTS = '...'

export const rangeNumbers = (
  siblingCount: number = 1,
  currentPage: number,
  pagesCount: number
): (number | string)[] => {
  const pageNumbers: (number | string)[] = []

  const leftSiblingCount = Math.min(+siblingCount, currentPage - 1)
  const rightSiblingCount = Math.min(+siblingCount, pagesCount - currentPage)

  const rangeStart = currentPage - leftSiblingCount
  const rangeEnd =
    currentPage <= 4 ? currentPage + (5 - currentPage) : currentPage + rightSiblingCount

  if (rangeStart > 1) {
    pageNumbers.push(1)
    if (rangeStart > 2) {
      pageNumbers.push(DOTS)
    }
  }

  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i > 0 && i <= pagesCount) {
      pageNumbers.push(i)
    }
  }

  if (rangeEnd < pagesCount) {
    if (rangeEnd < pagesCount - 1) {
      pageNumbers.push(DOTS)
    }

    pageNumbers.push(pagesCount)
  }

  return pageNumbers
}
