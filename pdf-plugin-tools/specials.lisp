;;; -*- Mode: LISP; Syntax: COMMON-LISP; Package: PDF-PLUGIN-TOOLS; Base: 10 -*-

;;; Copyright (c) 2022, Chun Tian (binghe).  All rights reserved.

;;; Redistribution and use in source and binary forms, with or without
;;; modification, are permitted provided that the following conditions
;;; are met:

;;;   * Redistributions of source code must retain the above copyright
;;;     notice, this list of conditions and the following disclaimer.

;;;   * Redistributions in binary form must reproduce the above
;;;     copyright notice, this list of conditions and the following
;;;     disclaimer in the documentation and/or other materials
;;;     provided with the distribution.

;;; THIS SOFTWARE IS PROVIDED BY THE AUTHOR 'AS IS' AND ANY EXPRESSED
;;; OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
;;; WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
;;; ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
;;; DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
;;; DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
;;; GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
;;; INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
;;; WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
;;; NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
;;; SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

(in-package :pdf-plugin-tools)

(defvar *plugin-id*)
(defvar *plugin-name*)
#+:macosx
(defvar *plugin-bundle*)
#+:macosx
(defvar *plugin-bundle-identifier*)
(defvar *plugin-help-text*)
(defvar *plugin-version*)
(defvar *copyright-message*)
(defvar *company-name*)
#+:macosx
(defvar *app-bundle*)
(defvar *extension-id*)

;; we set the documentation here so that the values above stay unbound
(setf (documentation '*plugin-id* 'variable)
      "The ID of the plug-in.  A four character creator code - see
FileMaker documentation."
      (documentation '*plugin-name* 'variable)
      "The name of the plug-in."
      #+:macosx #+:macosx
      (documentation '*plugin-bundle* 'variable)
      "It holds the plugin bundle as a CFBundleRef foreign object
(after called by CFRetain)"
      #+:macosx #+:macosx
      (documentation '*plugin-bundle-identifier* 'variable)
      "Used as the `CFBundleIdentifier' for the bundles generated on OS X."
      (documentation '*plugin-help-text* 'variable)
      "The help text for the plug-in to display in FileMaker's
preferences dialog box."
      (documentation '*plugin-version* 'variable)
      "Version number of the plug-in.  Should be a list of at
most four integers, e.g. (4 2 1) would correspond to version
\"4.2.1\"."
      (documentation '*company-name* 'variable)
      "The name of the company which created the plug-in.  Will
be used for entries into the Windows registry and in the DLL
version info."
      (documentation '*copyright-message* 'variable)
      "The copyright message for the DLL version info."
      #+:macosx #+:macosx
      (documentation '*app-bundle* 'variable)
      "It holds the Acrobat Pro application bundle as a CFBundleRef foreign
object (after called by CFRetain)"
      (documentation '*extension-id* 'variable)
      "A identifying cookie sometimes needed by the application"
      )

(defvar *product-name* nil
  "Will be used as the product name for the DLL version info.
The default value is NIL.  If no name is set, *PLUGIN-NAME* is
used instead.")

(defvar *plugin-logfile* t
  "Target file for the PLUGIN-LOG function.  A pathname designator,
or T for a default location in the user's local application data
folder, or NIL for no logging at all.")

(defparameter *last-gc* (load-time-value (get-universal-time))
  "The last time we collected all generations.")

(defvar *gc-interval* 600
  "How often \(in seconds) to collect all generations if the user
is idle.  This will only happen if idle messages are enabled.
Set to NIL if you don't want explicit collections.")

(defvar *log-errors-p* t
  "Whether errors occurring during the execution of a plug-in
function should be logged using FM-LOG.")

(defvar *log-backtraces-p* nil
  "Whether error log entries created due to *LOG-ERROR-P* should
be followed by a backtrace.")

(defvar *symbols-to-keep* nil
  "The list of symbols which must remain in the delivered DLL
image.  Only needed for delivery level 5.")

;; NOTE: If the HFT version is higher than the viewer loading the client supports,
;; it displays an alert box with the message "There was an error while loading
;; the client <i><plug-in name></i>. The client is incompatible with this version
;; of the Viewer."

;; <PIRequir.h>
(defvar *pi-core-version* +core-hft-version-5+
  "Everybody needs the Core HFT, so don't omit this one.")

#|
(defvar *pi-acrosupport-version* +as-calls-hft-version-8+
  "Most plug-ins will use calls from the AdobeSupport family.")

(defvar *pi-cos-version* +cos-hft-version-6+
  "Many plug-ins will not need to access the low-level Cos functionality.")

(defvar *pi-pd-model-version* +pd-model-hft-version-6+
  "PDModel methods - the version of the PD level HFT.")

(defvar *pi-acroview-version* +acroview-hft-version-6+
  "AcroView methods - the version of the Acrobat viewer level HFT.")

(defvar *pi-as-extra-version* +as-extra-hft-version-6+
  "ASExtra methods")

(defvar *pi-macintosh-version* +macintosh-hft-version-2_2+
  "Macintosh specific methods (AppleEvents, AVRect conversions, etc.)
 - the version of the Mac OS-only methods HFT")

(defvar *pi-pdfedit-write-version* +pdfedit-write-hft-version-6+
  "PDFEdit Write methods")

(defvar *pi-pdfedit-read-version* +pdfedit-read-hft-version-6+
  "PDFEdit Read methods")

(defvar *pi-pd-system-font-version* +pd-sys-font-hft-version-4+
  "PDSysFont methods")

(defvar *pi-page-pde-content-version* +page-pde-content-hft-version-6+
  "PagePDEContent methods")

(defvar *pi-pdsedit-write-version* +pdswrite-version-6+)

(defvar *pi-pdsedit-read-version*  +pdsread-version-6+)

(defvar *pi-pdmetadata-version* +pdmetadata-hft-version-6+)

(defvar *pi-acrocolor-version +acro-color-hft-version-6+) ; not available in Reader

(defvar *pi-uitcore-version* +uit-core-hft-version-1+)

(defvar *pi-pdalternates-version* +pd-alternates-hft-version-13+)
|#
