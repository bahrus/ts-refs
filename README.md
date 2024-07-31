# ts-refs

The recent typescript blog post found it amusing, it seems, to imply that developers were all quite aware that the buildless typescript Microsoft supports had support for importing modules from type definition files:

> To avoid this, developers typically had to use import(...) types in JSDoc comments.

Where were developers supposed to learn that such an option even existed?  

[No](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html) [idea](https://www.google.com/search?q=jsdoc+import+types+from+type+definition+files&sca_esv=f583aec8b3671997&sxsrf=ADLYWILWHAvQOa24i969M3KTSHnvI4CCtQ%3A1722464335667&source=hp&ei=T7iqZu_wJuTzkPIP3NfOsAw&iflsig=AL9hbdgAAAAAZqrGX5766U3yi_U8VDQynbrnqQTG0duO&ved=0ahUKEwiv1PTWp9KHAxXkOUQIHdyrE8YQ4dUDCBg&uact=5&oq=jsdoc+import+types+from+type+definition+files&gs_lp=Egdnd3Mtd2l6Ii1qc2RvYyBpbXBvcnQgdHlwZXMgZnJvbSB0eXBlIGRlZmluaXRpb24gZmlsZXMyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRirAjIFECEYqwJIpwpQAFgAcAB4AJABAJgBeqABeqoBAzAuMbgBA8gBAPgBAvgBAZgCAaAChgGYAwCSBwMwLjGgB5wH&sclient=gws-wiz)

Anyway, my experiments with it are promising, and I'm excited to use those to avoid adding to the global warming that requiring compiling my ts files has to be adding to.

But I've found that a sticking point to this solution has to do with [lack of full support for bare import specifiers / import maps](https://github.com/microsoft/TypeScript/issues/43326).  This causes problems when importing types from one package, which imports chains of types from another dependent package.

Having gone this far, I feel compelled to find workarounds until that critical issue is sorted out.

So the solution is this interim library, shared by projects that use this feature, via git's [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

