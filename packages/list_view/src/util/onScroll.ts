/**-----------------------------------------------------------------------------------------------------------------------
 * *                                                     INFO
 *   스크롤 할 때 사용하면 된다.
 *   scroll할 때 이벤트리스너 두번째 인수에 객체로 passive: true를 줘서 preventDefault 호출 감지를 안하게 할 수 있다. 즉, 성능을 더 올릴 수 있다.
 *
 *-----------------------------------------------------------------------------------------------------------------------**/

export const onScroll = (cb: any) => {
  let isEnableScrollState = true;

  return () => {
    if (!isEnableScrollState) return;
    isEnableScrollState = false;

    return requestAnimationFrame(() => {
      isEnableScrollState = true;
      cb();
    });
  };
};
