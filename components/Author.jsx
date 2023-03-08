import React from 'react'

const Author = ({author}) => {
  return (

<div>
    <div className="flex items-center mb-4">
    <p class="mb-4 space-y-1 md:space-x-1 md:space-y-0">
  <a
    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    data-te-collapse-init
    data-te-ripple-init
    data-te-ripple-color="light"
    href="#collapseExample"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExample">
    Link with href
  </a>
  <button
    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    type="button"
    data-te-collapse-init
    data-te-ripple-init
    data-te-ripple-color="light"
    data-te-target="#collapseExample"
    aria-expanded="false"
    aria-controls="collapseExample">
    Button with data-te-target
  </button>
</p>
<div class="!visible hidden" id="collapseExample" data-te-collapse-item>
  <div
    class="block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
    Some placeholder content for the collapse component. This panel is
    hidden by default but revealed when the user activates the relevant
    trigger.
  </div>
</div>
    </div>
  </div>

  )
}

export default Author